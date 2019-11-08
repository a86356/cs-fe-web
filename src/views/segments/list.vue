<template>
  <div class="wrapper">




    <Form
      :model="searchdata"
      :inline="true"
      :label-width="50"
    >
      <FormItem
        label="大课程"
        prop="class_id"
      >
        <i-select
          @on-change="searchclass($event,'class_id')"
          v-model="searchdata.class_id"
          :label-in-value="true"
          style="width: 200px"
        >
          <i-option
            v-for="(item2,index2) in classeslist"
            :value="item2.value"
            :key="item2.index2"
          >{{ item2.label }}</i-option>
        </i-select>
      </FormItem>

      <Button
        type="info"
        @click="showaddmodal"
      >新建</Button>

    </Form>



    <Modal
      v-model="modal1"
      title="编辑"
      :mask-closable="false"
      :closable="false"
    >
      <Form
        :model="editdata"
        :label-width="100"
      >
        <FormItem
          label="大课程id"
          prop="class_id"
        >
          <i-select
            @on-change="dealSelect($event,'class_id')"
            v-model="editdata.class_id"
            :label-in-value="true"
          >
            <i-option
              v-for="(item2,index2) in classeslist"
              :value="item2.value"
              :key="item2.index2"
            >{{ item2.label }}</i-option>
          </i-select>
        </FormItem>



        <FormItem
          label="课表名"
          prop="seg_name"
        >
          <Input
            type="text"
            v-model="editdata.seg_name"
            placeholder="请输入课表名"
          >
          </Input>
        </FormItem>


        <FormItem
          label="上传视频"
        >
          <input
            type="file"
            @change="uploadVideo($event)"
          >
        </FormItem>

        <div class="percentwrap" >
          <div class="percent" style="background: green;height: 30px;color: white;line-height: 30px;text-align: center;margin-bottom: 10px"
            :style="{'width':percent+'%'}"
          >
            {{percent}}%
          </div>
        </div>

        <FormItem
          label="原始视频链接"
          prop="video_url"
        >
          <Input
            type="text"
            v-model="editdata.video_origin_url"
            :disabled="true"
          >
          </Input>
        </FormItem>

        <FormItem
          label="处理视频链接"
          prop="video_url"
        >
          <Input
            type="text"
            v-model="editdata.video_deal_url"
            :disabled="true"
          >
          </Input>
        </FormItem>


        <FormItem
          label="视频长度"
          prop="video_length"
        >
          <Input
            type="text"
            v-model="editdata.video_length"
            :disabled="true"
          >
          </Input>
        </FormItem>


        <FormItem
          label="视频会员组"
          prop="viptype"
        >
          <i-select
            @on-change="dealSelect($event,'viptype')"
            v-model="editdata.viptype"
            :label-in-value="true"
          >
            <i-option
              v-for="(item2,index2) in viptypelist"
              :value="item2.value"
              :key="item2.index2"
            >{{ item2.label }}</i-option>
          </i-select>
        </FormItem>

        <FormItem
          label="上传图片"
          prop="url"
        >
          <input
            type="file"
            @change="uploadpic"
          >
        </FormItem>

        <FormItem
          label="课程图片"
          prop="pic"
        >
          <img
            :src="editdata.pic"
            style="width: 150px;height: 150px"
          >
        </FormItem>


        <FormItem
          label="视频排序"
          prop="sort"
        >
          <Input
            type="text"
            v-model="editdata.sort"
            placeholder="数字越大,越靠前"
          >
          </Input>
        </FormItem>


        <FormItem
          label="喜欢的人数"
          prop="lovenum"
        >
          <Input
            type="text"
            v-model="editdata.lovenum"
            placeholder="请输入喜欢的人数"
          >
          </Input>
        </FormItem>


        <FormItem
          label="评论的数量"
          prop="comments"
        >
          <Input
            type="text"
            v-model="editdata.comments"
            placeholder="请输入评论的数量"
          >
          </Input>
        </FormItem>

      </Form>

      <div slot="footer">
        <Button
          type="error"
          size="large"
          @click="canceldit"
        >取消</Button>
        <Button
          type="primary"
          size="large"
          @click="confirmedit"
        >确定</Button>

      </div>
    </Modal>



    <Table
      stripe
      @on-selection-change="selectChange"
      border
      :columns="columns1"
      :data="list1"
    ></Table>

    <div class="pageWrap">
      <Page
        :page-size="pSize"
        :total="counts"
        @on-change="change_page"
      ></Page>
    </div>

  </div>
</template>

<script>
    import extendCommon from "@/extends/extendCommon";

    import { _10tocn ,cn3_to_10,changes2hms} from "@/utils/date.js";
    import axios from 'axios';
    import BaseConfig from '@/config/config'

    export default {
        extends: extendCommon,
        data() {
            return {
                classeslist:[],
                tbName: "cs_classes_segment",
                searchdata:{},
                editdata:{},
                viptypelist:[
                    {
                        label:"免费",
                        value:"1"
                    },
                    {
                        label:"vip",
                        value:"2"
                    },
                    {
                        label:"svip",
                        value:"3"
                    },
                ],
                levellist:[
                    {
                        label:"入门",
                        value:"1"
                    },
                    {
                        label:"初级",
                        value:"2"
                    },
                    {
                        label:"中级",
                        value:"3"
                    },
                    {
                        label:"高级",
                        value:"4"
                    },
                ],
                classstatuslist:[
                    {
                        label:"还没开始更新",
                        value:"1"
                    },
                    {
                        label:"正在更新",
                        value:"2"
                    },
                    {
                        label:"更新完成",
                        value:"3"
                    },
                ],
                techlist:[],
                categorylist:[
                    {
                        label:"前端",
                        value:"1"
                    },
                    {
                        label:"后端",
                        value:"2"
                    },
                    {
                        label:"服务器",
                        value:"3"
                    },
                    {
                        label:"其他",
                        value:"4"
                    },
                ],
                discountlist:[
                    {
                        label:"不打折",
                        value:"1"
                    },
                    {
                        label:"9折",
                        value:"0.9"
                    },
                    {
                        label:"8折",
                        value:"0.8"
                    },
                    {
                        label:"7折",
                        value:"0.7"
                    },
                    {
                        label:"6折",
                        value:"0.6"
                    },
                    {
                        label:"5折",
                        value:"0.5"
                    },
                    {
                        label:"4折",
                        value:"0.4"
                    },
                    {
                        label:"3折",
                        value:"0.3"
                    },
                    {
                        label:"2折",
                        value:"0.2"
                    },
                ],
                isedit:false,
                columns1:[
                    {
                        title: "编号",
                        key: "id"
                    },
                    {
                        title: "课程名称",
                        key: "class_name"
                    },
                    {
                        title: "节名称",
                        key: "seg_name"
                    },
                    {
                        title: "原视频",
                        key: "video_origin_url"
                    },
                    {
                        title: "处理视频",
                        key: "video_deal_url"
                    },
                    {
                        title: "视频长度",
                        key: "video_length",
                        render: (h, params) => {
                            let { video_length } = params.row;

                            let result = changes2hms(video_length);

                            return h("div", result);
                        }
                    },
                    {
                        title: "pic",
                        key: "节图",
                        render: (h, params) => {
                            return h("div", [
                                h("img", {
                                    attrs: {
                                        src: params.row.pic
                                    },
                                    style: {
                                        "max-width": "100%"
                                    }
                                })
                            ]);
                        }
                    },
                    {
                        title: "是否收费",
                        key: "viptype",
                        render: (h, params) => {
                            let { viptype } = params.row;
                            let txt;
                            if (viptype == "1") {
                                txt = "免费";
                            }
                            if (viptype == "2") {
                                txt = "vip";
                            }
                            if (viptype == "3") {
                                txt = "svip";
                            }
                            return h("div", txt);
                        }
                    },
                    {
                        title: "发布时间",
                        key: "create_time",
                        render: (h, params) => {
                            let timestamp4 = new Date(
                                parseInt(params.row.create_time + "000")
                            ).Format("yy-MM-dd hh:mm:ss");

                            return h("div", timestamp4);
                        }
                    },

                    {
                        title: "喜欢的个数",
                        key: "lovenum",
                    },
                    {
                        title: "排序",
                        key: "sort",
                    },
                    {
                        title: "评论数",
                        key: "comments",
                    },
                    {
                        title: "节的帖子id",
                        key: "post_id",
                    },

                    {
                        title: "操作",
                        key: "action",
                        width: 200,
                        align: "center",
                        render: (h, params) => {
                            return h("div", [
                                h(
                                    "Button",
                                    {
                                        props: {
                                            type: "primary",
                                            size: "small"
                                        },
                                        style: {
                                            marginLeft: "10px"
                                        },
                                        on: {
                                            click: () => {



                                                let { row } = params;
                                                let obj = { ...row };

                                                this.editdata = obj;

                                                this.isedit = true;
                                                this.modal1 =true;
                                            }
                                        }
                                    },
                                    "编辑"
                                ),
                                h(
                                    "Button",
                                    {
                                        props: {
                                            type: "error",
                                            size: "small"
                                        },
                                        style: {
                                            marginLeft: "10px"
                                        },
                                        on: {
                                            click: () => {
                                                this.deleteItem({ids:params.row.id});
                                            }
                                        }
                                    },
                                    "删除"
                                )
                            ]);
                        }
                    }
                ]
            };
        },
        mounted() {
            this.loadClasses();


        },
        methods: {
            showPic(url) {
                this.$set(this.editdata,'pic',url)
            },
            searchclass(e){
                let {label,value} =e;

                this.searchData.class_id =value;

                this.loadData();
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
            searchlist(){
                this.search(this.searchdata)
            },
            cancelintroduction(){
              this.modal2=false;
            },
            saveintroduction(){

                this.c_update({
                    service:"admin.update",
                    tableName:"cs_classes_base",
                    data:{
                        id:this.editdata.id,
                        introduction_md:this.mdvalue,
                        introduction_html:this.$refs.md.d_render
                    }
                },false)
            },
            dealSelect(e,name){

                let {value,label} =e;
                this.editdata[name]=value;

                if(name=='discount'){
                    this.calAfterPrice();
                }
            },
            changeinput(e,name){
                if(name=='origin_price'){
                    this.calAfterPrice();
                }
            },

            calAfterPrice(){
                this.editdata['after_price'] =Math.floor(parseFloat(this.editdata['discount'])* this.editdata['origin_price']);
            },
            canceldit(){
                this.modal1=false;
            },
            confirmedit(){

                if(!this.isedit){
                    // 新增
                    this.$post({
                        service:"segments.add",
                        table:"cs_classes_segment",
                        data:{...this.editdata}
                    }).then(res=>{
                        this.showmsg('success','添加成功')
                    })


                } else{
                    let d1={...this.editdata}
                    let obj={
                        id:d1.id,
                        seg_name:d1.seg_name,
                        video_deal_url:d1.video_deal_url,
                        video_origin_url:d1.video_origin_url,
                        video_length:d1.video_length,
                        viptype:d1.viptype,
                        lovenum:d1.lovenum,
                        sort:d1.sort,
                        comments:d1.comments,
                        pic:d1.pic,

                    }

                    this.c_update({
                        service:"admin.update",
                        tableName:"cs_classes_segment",
                        data:obj
                    })

                }
            },
            showaddmodal(){
                this.isedit=false;
                this.modal1=true;
                this.editdata={}
            },
            loadClasses() {
                this.$post({
                    service:"admin.getall",
                    table:"cs_classes_base"
                }).then(res=>{
                    let {list}  =res;
                    let temp=[];
                    for(let i=0;i<list.length;i++){
                        temp.push({
                            label:list[i].class_name,
                            value:list[i].id
                        })
                    }
                    this.classeslist = temp;

                    //http://cdn.cs1024.com/01_vscode%E7%9A%84%E7%AE%80%E4%BB%8B%E5%92%8C%E5%AE%89%E8%A3%85.mp4?avinfo
                })
            },
        },
        components: {

        }
    };
</script>

<style scoped lang="less">
  .mavonEditor {
    height: 500px;
  }
</style>
