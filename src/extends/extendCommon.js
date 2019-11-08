
import axios from 'axios';

import BaseConfig from '@/config/config'
import * as qiniu from 'qiniu-js'
import { _10tocn ,cn3_to_10,getymd} from "@/utils/date.js";

export default {
    inject: ["reload"],
    data() {
        return {
            searchData: {},
            editData: {},
            modal1: false,
            modal2: false,
            modal3: false,
            percent:"0",
            videosource:'',
            labelWidth:50,
            toolbars:{
              imagelink: true,
              code: true,
            },
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {

        loadData() {
            this.loadData_table();
        },
        loadData_table() {
            this.$post({
                page: this.page,
                service: 'admin.getlist',
                table: this.tbName,
                search: this.searchData
            }).then(res => {

                this.list1 = res.list;
                this.counts = res.count;
            });
        },
        search(data) {

            this.searchData = data;
            this.page = 1;
            this.loadData_table();
        },
        toggleModal(v){
          this.modal1=v;
        },
        c_add(v, needTable = false) {
            let d = {
                service: this.add_service,
                ...v,
            }
            if (needTable) {
                d.table = this.tbName;
            }

            this.$post(d).then(res => {
                this.showmsg("success", "添加成功")

                this.reload();
            });
        },
        c_update(value,isreload=true) {
            let { data, service,tableName } = value;
            this.$post({
                service: service,
                table: tableName,
                id: data.id,
                data:data
            }).then(res => {

                this.showmsg("success", "成功")

              if(isreload){
                this.reload();
              }
            })

        },
        uploadpic(e) {

            let file = e.target.files[0];

            let formData = new FormData();
            formData.append("file", file);

            axios.post(BaseConfig.uploadPicUrl, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(res => {

                let { msg, url } = res.data;
                this.showmsg("success", msg)

                this.showPic(url)
            })
        },
        deleteItem(ids){
          let myids = ids.ids;


          this.$Modal.confirm({
            title: '删除',
            content: '您确定要删除吗?',
            onOk: () => {
              this.$post({
                service:'admin.deleteids',
                table:this.tbName,
                ids:myids
              }).then(res=>{
                this.showmsg('success','删除成功');
                this.reload();
              })
            }
          });
        },
        $imgAdd(pos, $file){

          let formData = new FormData();
          formData.append("file", $file);
          axios.post(BaseConfig.uploadPicUrl, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }).then(res => {

            let { msg, url } = res.data;
            this.$refs.md.$img2Url(pos, url);
          })


        },
        uploadVideo(e){

          let file = e.target.files[0];


          let ymd = getymd('/');

          var keypath = '/video/'+ymd+'/'+e.currentTarget.files[0].name;
          let that =this
          this.$post({
            service:"admin.getqiniutoken",

          }).then(res=>{
            let {token,domain} = res;

            var putExtra = {
              fname: file,
              params: {},
              mimeType:null
            };

            var config = {
              useCdnDomain: true,
              region: null
            };

            var observer = {
              next(res){
                // ...
                that.percent =res.total.percent;
              },
              error(err){
                // ...
           //     console.log(err)
              },
              complete(res){

                console.log(res);

                // ...
                let {key} =res;


                var filename_arr=key.split('_');

                that.$set(that.editdata,'sort',filename_arr[0])


                let origin_source = domain+keypath;

                that.$set(that.editdata,'video_origin_url',origin_source)

                that.$post({
                  service:'admin.dealqiniuvideo',
                  keypath:keypath
                }).then(res=>{


                  that.$set(that.editdata,'video_deal_url',domain+keypath+'.m3u8')

                })


                that.$post({
                  service:'admin.qiniuvideoinfo',
                  url:origin_source
                }).then(res=>{
                  let {duration} =res;
                  that.$set(that.editdata,'video_length',duration)

                  console.log(that.editdata)
                })
                console.log(that.editdata)


              }
            }
            var observable = qiniu.upload(file, keypath, token, putExtra, config)
            var subscription = observable.subscribe(observer) // 上传开始


          })






          // let file = e.target.files[0];
          //
          // let formData = new FormData();
          // formData.append("file", file);
          // formData.append("service", 'admin.uploadvideo');
          //
          // axios.post(BaseConfig.baseURL, formData, {
          //   headers: {
          //     "Content-Type": "multipart/form-data"
          //   }
          // }).then(res => {
          //
          //   console.log(res)
          // })
        }

    }
}
