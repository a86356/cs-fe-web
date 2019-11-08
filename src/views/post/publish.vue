<template>
  <div class="wrapper">


    <Form
      :model="searchdata"
      :inline="true"
      :label-width="80"
    >
      <FormItem
        label="帖子名称"
        prop="title"
      >
        <Input
          type="text"
          v-model="searchdata.title"
          placeholder=”请输入帖子名称“
        >
        </Input>
      </FormItem>

      <Button
        type="primary"
        @click="searchlist"
      >搜索</Button>

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
      width="1000"
    >
      <Form
        :model="editdata"
        :label-width="100"
      >
        <FormItem
          label="帖子名称"
          prop="class_name"
        >
          <Input
            type="text"
            v-model="editdata.title"
            placeholder="请输入帖子名称"
          >
          </Input>
        </FormItem>


        <FormItem
          label="技术类别"
          prop="type"
        >
          <i-select
            @on-change="dealSelect($event,'type')"
            v-model="editdata.type"
            :label-in-value="true"
            style="z-index: 2000"
          >
            <i-option
              v-for="(item2,index2) in techlist"
              :value="item2.value"
              :key="item2.index2"
            >{{ item2.label }}</i-option>
          </i-select>
        </FormItem>

        <FormItem
          label="阅读量"
          prop="readnums"
        >
          <Input
            type="text"
            v-model="editdata.readnums"
            placeholder="请输入阅读量"
          >
          </Input>
        </FormItem>

        <FormItem
          label="是否显示"
          prop="isshow"
        >
          <i-select
            @on-change="dealSelect($event,'isshow')"
            v-model="editdata.isshow"
            :label-in-value="true"
            style="z-index: 2000"
          >
            <i-option
              v-for="(item2,index2) in isshowlist"
              :value="item2.value"
              :key="item2.index2"
            >{{ item2.label }}</i-option>
          </i-select>
        </FormItem>

        <FormItem
          label="视频帖子"
          prop="isvideo"
        >
          <i-select
            @on-change="dealSelect($event,'isvideo')"
            v-model="editdata.isvideo"
            :label-in-value="true"
            style="z-index: 2000"
          >
            <i-option
              v-for="(item2,index2) in isvideolist"
              :value="item2.value"
              :key="item2.index2"
            >{{ item2.label }}</i-option>
          </i-select>
        </FormItem>



        <FormItem
          label="帖子内容"
          prop="cnt_md"
        >
          <div @dragover.prevent>
            <mavon-editor
              placeholder="请输入您要填写的内容,请点击上面的</>插入代码,支持图片拖拽上传,支持图片粘贴上传"
              codeStyle='atelier-forest-dark'
              style="height: 500px"
              class="mavonEditor" :toolbars="toolbars"  ref=md @imgAdd="$imgAdd"  v-model="editdata.cnt_md"/>
          </div>
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

    import { _10tocn ,cn3_to_10} from "@/utils/date.js";
    import axios from 'axios';
    import BaseConfig from '@/config/config'

    export default {
        extends: extendCommon,
        data() {
            return {
                toolbars:{
                    imagelink: true,
                    code: true,
                    htmlcode: true,
                },
                d3:'',
                mdvalue:"",
                tbName: "cs_poster_publish",
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
                isvideolist:[
                    {
                        label:"视频帖子",
                        value:"1"
                    },
                    {
                        label:"普通帖子",
                        value:"2"
                    },
                ],
                isshowlist:[
                    {
                        label:"前端显示",
                        value:"1"
                    },
                    {
                        label:"前端不显示",
                        value:"2"
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
                        title: "帖子标题",
                        key: "title"
                    },
                    {
                        title: "课程id",
                        key: "class_id"
                    },
                    {
                        title: "节id",
                        key: "segment_id"
                    },
                    {
                        title: "帖子内容",
                        key: "cnt_md"
                    },
                    {
                        title: "发布人id",
                        key: "publisher_id"
                    },
                    {
                        title: "阅读量",
                        key: "readnums"
                    },
                    {
                        title: "类型",
                        key: "type",
                        render: (h, params) => {
                            let { type } = params.row;
                            let txt ;
                            let list = this.techlist;

                            for (let i=0;i<list.length;i++){
                                if(type==list[i].value){
                                    txt = list[i].label
                                }
                            }

                            return h("div", txt);
                        }
                    },
                    {
                        title: "是否在前端显示",
                        key: "isshow",
                        render: (h, params) => {
                            let { isshow } = params.row;
                            let txt =isshow=='1'?'显示':"不显示";

                            return h("div", txt);
                        }
                    },
                    {
                        title: "是否是视频帖子",
                        key: "isvideo",
                        render: (h, params) => {
                            let { isvideo } = params.row;
                            let txt =isvideo=='1'?'视频帖子':"普通帖子";

                            return h("div", txt);
                        }
                    },
                    {
                        title: "创建时间",
                        key: "create_time",
                        render: (h, params) => {
                            let timestamp4 = new Date(
                                parseInt(params.row.create_time + "000")
                            ).Format("yy-MM-dd hh:mm:ss");

                            return h("div", timestamp4);
                        }
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
            this.loadTechTypes();

        },
        methods: {
            showPic(url) {
                this.$set(this.editdata,'pic',url)
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
                })
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

                    let cnt_html =  this.$refs.md.d_render

                    let obj={

                        cnt_html:cnt_html,
                        ...this.editdata
                    }


                    // 新增
                    this.$post({
                        service:"poster.add",
                        table:this.tbName,
                        data:obj
                    }).then(res=>{
                        this.showmsg('success','添加成功')
                     //   this.reload();
                    })
                } else{

                    let cnt_html =  this.$refs.md.d_render
                    let {cnt_md,isshow,isvideo,title,type,readnums,id}= this.editdata;

                    let obj={
                        id:id,
                        isshow:isshow,
                        isvideo:isvideo,
                        title:title,
                        type:type,
                        cnt_html:cnt_html,
                        cnt_md:cnt_md,
                        readnums:readnums
                    }


                    this.c_update({
                        service:"poster.update",
                        tableName:this.tbName,
                        data:obj
                    },false)

                }
            },
            showaddmodal(){
                this.isedit=false;
                this.modal1=true;
                this.editdata={}
            },
            loadTechTypes() {
                this.$post({
                    service:"admin.getall",
                    table:"cs_classes_techtype"
                }).then(res=>{
                    let {list}  =res;
                    let temp=[];
                    for(let i=0;i<list.length;i++){
                        temp.push({
                            label:list[i].name,
                            value:list[i].id
                        })
                    }
                    this.techlist = temp;
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

  /deep/.ivu-select-dropdown{
    z-index: 2000 ;
  }
</style>
