<template>
  <div class="wrapper">


    <Form
      :model="searchdata"
      :inline="true"
      :label-width="50"
    >


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
      v-model="modal2"
      width="1200"
      height="1000"
      title="课程简介"
      :mask-closable="false"
      :closable="false"
    >

      <div slot="footer">
        <Button
          type="error"
          size="large"
          @click="cancelintroduction"
        >取消</Button>
        <Button
          type="primary"
          size="large"
          @click="saveintroduction"
        >确定</Button>

      </div>
    </Modal>

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
          label="课程名"
          prop="class_name"
        >
          <Input
            type="text"
            v-model="editdata.class_name"
            placeholder="请输入课程名称"
          >
          </Input>
        </FormItem>

        <FormItem
          label="会员组"
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
          label="难易程度"
          prop="level"
        >
          <i-select
            @on-change="dealSelect($event,'level')"
            v-model="editdata.level"
            :label-in-value="true"
          >
            <i-option
              v-for="(item2,index2) in levellist"
              :value="item2.value"
              :key="item2.index2"
            >{{ item2.label }}</i-option>
          </i-select>
        </FormItem>



        <FormItem
          label="课程状态"
          prop="class_status"
        >
          <i-select
            @on-change="dealSelect($event,'class_status')"
            v-model="editdata.class_status"
            :label-in-value="true"
          >
            <i-option
              v-for="(item2,index2) in classstatuslist"
              :value="item2.value"
              :key="item2.index2"
            >{{ item2.label }}</i-option>
          </i-select>
        </FormItem>


        <FormItem
          label="技术类别"
          prop="tech"
        >
          <i-select
            @on-change="dealSelect($event,'tech')"
            v-model="editdata.tech"
            :label-in-value="true"
          >
            <i-option
              v-for="(item2,index2) in techlist"
              :value="item2.value"
              :key="item2.index2"
            >{{ item2.label }}</i-option>
          </i-select>
        </FormItem>


        <FormItem
          label="技术分类"
          prop="category"
        >
          <i-select
            @on-change="dealSelect($event,'category')"
            v-model="editdata.category"
            :label-in-value="true"
          >
            <i-option
              v-for="(item2,index2) in categorylist"
              :value="item2.value"
              :key="item2.index2"
            >{{ item2.label }}</i-option>
          </i-select>
        </FormItem>

        <FormItem
          label="原价"
          prop="origin_price"
        >
          <Input
            type="text"
            v-model="editdata.origin_price"
            @on-change="changeinput($event,'origin_price')"
          >
          </Input>
        </FormItem>


        <FormItem
          label="折扣"
          prop="discount"
        >
          <i-select
            @on-change="dealSelect($event,'discount')"
            v-model="editdata.discount"
            :label-in-value="true"
          >
            <i-option
              v-for="(item2,index2) in discountlist"
              :value="item2.value"
              :key="item2.index2"
            >{{ item2.label }}</i-option>
          </i-select>
        </FormItem>



        <FormItem
          label="折后价"
          prop="after_price"
        >
          <Input
            type="text"
            v-model="editdata.after_price"
            :disabled="true"
          >
          </Input>
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
          label="喜欢人数"
          prop="lovenum"
        >
          <Input
            type="text"
            v-model="editdata.lovenum"
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

    import { _10tocn ,cn3_to_10} from "@/utils/date.js";
    import axios from 'axios';
    import BaseConfig from '@/config/config'

    export default {
        extends: extendCommon,
        data() {
            return {

                tbName: "cs_poster_reply",
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
                        title: "回复编号",
                        key: "id"
                    },
                    {
                        title: "被回复的帖子id",
                        key: "reply_post_id"
                    },
                    {
                        title: "回复的用户名",
                        key: "reply_uid_name"
                    },
                    {
                        title: "评论的内容",
                        key: "reply_cnt_md"
                    },
                    {
                        title: "被引用的回帖id",
                        key: "quote_post_id"
                    },
                    {
                        title: "被引用的用户名",
                        key: "reply_post_uid_name"
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
                                            type: "primary",
                                            size: "small"
                                        },
                                        style: {
                                            marginLeft: "10px",
                                            marginright: "10px",
                                        },
                                        on: {
                                            click: () => {
                                                this.modal2= true;
                                                let row = params.row;


                                                this.editdata = row
                                            }
                                        }
                                    },
                                    "课程简介"
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
                    // 新增
                    this.$post({
                        service:"classes.add",
                        table:"cs_classes_base",
                        data:{...this.editdata}
                    }).then(res=>{
                        this.showmsg('success','添加成功')
                        this.reload();
                    })
                } else{
                    let d1={...this.editdata}
                    let obj={
                        id:d1.id,
                        class_name:d1.class_name,
                        viptype:d1.viptype,
                        level:d1.level,
                        class_status:d1.class_status,
                        tech:d1.tech,
                        category:d1.category,
                        origin_price:d1.origin_price,
                        discount:d1.discount,
                        after_price:d1.after_price,
                        pic:d1.pic,
                        lovenum:d1.lovenum
                    }

                    this.c_update({
                        service:"admin.update",
                        tableName:"cs_classes_base",
                        data:obj
                    })

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
</style>
