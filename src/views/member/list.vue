<template>
  <div class="wrapper">

    <Form
      :model="searchdata"
      :inline="true"
      :label-width="50"
    >
      <FormItem
        label="手机号"
        prop="phone"
      >
        <Input
          type="text"
          v-model="searchdata.phone"
          placeholder=”请输入手机号“
        >
        </Input>
      </FormItem>

      <FormItem
        label="用户名"
        prop="usernmae"

      >
        <Input
          type="text"
          v-model="searchdata.usernmae"
          placeholder=”请输入用户名“
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
    >
      <Form
        :model="editdata"
        :label-width="100"
      >
        <FormItem
          label="用户名"
          prop="username"
        >
          <Input
            type="text"
            v-model="editdata.username"
            :disabled="isedit"
          >
          </Input>
        </FormItem>

        <FormItem
          label="手机号"
          prop="phone"

        >
          <Input
            type="text"
            v-model="editdata.phone"
            :disabled="isedit"
          >
          </Input>
        </FormItem>


        <FormItem
          label="密码"
          prop="password"

        >
          <Input
            type="text"
            v-model="editdata.password"
            placeholder=”请输入密码“
            :disabled="isedit"
          >
          </Input>
        </FormItem>

        <FormItem
          label="邮箱"
          prop="email"
        >
          <Input
            type="text"
            v-model="editdata.email"
            placeholder=”请输入邮箱“
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
          label="头像"
          prop="avatar"
        >
          <img
            :src="editdata.avatar"
            style="width: 80px;height: 80px"
          >
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
          label="会员到期时间"
          prop="expired_time"
        >
          <DatePicker
            v-model="editdata.expired_time"
            type="date"
            placeholder="请选择日期"
            style="width: 200px"
            format="yyyy/MM/dd"
          ></DatePicker>
        </FormItem>




        <FormItem
          label="积分"
          prop="point"
        >
          <Input
            type="text"
            v-model="editdata.point"
            placeholder=”请输入积分“
          >
          </Input>
        </FormItem>


        <FormItem
          label="github地址"
          prop="github"
        >
          <Input
            type="text"
            v-model="editdata.github"
            placeholder=”请输入github地址“
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
    export default {
        extends: extendCommon,
        data() {
            return {
                tbName: "cs_member_base",
                add_service: "member.add",
                searchdata:{},
                editdata:{},
                viptypelist:[
                    {
                        label:"免费用户",
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
                isedit:false,
                columns1:[
                    {
                        title: "编号",
                        key: "id"
                    },
                    {
                        title: "用户名",
                        key: "username"
                    },
                    {
                        title: "手机号",
                        key: "phone"
                    },
                    {
                        title: "github",
                        key: "github"
                    },
                    {
                        title: "头像",
                        key: "avatar",
                        render: (h, params) => {
                            return h("div", [
                                h("img", {
                                    attrs: {
                                        src: params.row.avatar
                                    },
                                    style: {
                                        "max-width": "100%"
                                    }
                                })
                            ]);
                        }
                    },
                    {
                        title: "积分",
                        key: "point"
                    },
                    {
                        title: "经验值",
                        key: "experience"
                    },
                    {
                        title: "用户组",
                        key: "group_name"
                    },
                    {
                        title: "vip",
                        key: "viptype",
                        render: (h, params) => {
                            let { viptype } = params.row;
                            let txt;
                            if (viptype == "1") {
                                txt = "免费用户";
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
                        title: "用户创建时间",
                        key: "create_time",
                        render: (h, params) => {
                            let timestamp4 = new Date(
                                parseInt(params.row.create_time + "000")
                            ).Format("yy-MM-dd hh:mm:ss");
                            return h("div", timestamp4);
                        }
                    },
                    {
                        title: "用户最后登录",
                        key: "last_login",
                        render: (h, params) => {
                            let timestamp4 = new Date(
                                parseInt(params.row.last_login + "000")
                            ).Format("yy-MM-dd hh:mm:ss");
                            return h("div", timestamp4);
                        }
                    },
                    {
                        title: "会员到期时间",
                        key: "expired_time",
                        render: (h, params) => {
                            let timestamp4 = new Date(
                                parseInt(params.row.expired_time + "000")
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
                                                obj.expired_time = _10tocn(row.expired_time);
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
        },
        methods: {
            showPic(url) {
                this.$set(this.editdata,'avatar',url)
            },
            searchlist(){
                this.search(this.searchdata)
            },
            dealSelect(){
            },
            canceldit(){
                this.modal1=false;
            },
            confirmedit(){
                let d = {...this.editdata};
                d.expired_time= cn3_to_10(d.expired_time);
                if(!this.isedit){
                    // 新增
                    this.$post({
                        service:"member.add",
                        ...d
                    }).then(res=>{
                        this.showmsg('success','添加成功')
                        this.reload();
                    })
                } else{
                    let obj={
                        avatar:d.avatar,
                        email:d.email,
                        viptype:d.viptype,
                        expired_time:d.expired_time,
                        point:d.point,
                        github:d.github,
                        id:d.id
                    }
                    this.c_update({
                        service:"admin.update",
                        tableName:"cs_member_base",
                        data:{...obj}
                    })
                }
            },
            showaddmodal(){
                this.isedit=false;
                this.modal1=true;
                this.editdata={}
            }
        },
        components: {
        }
    };
</script>

<style scoped lang="less">
</style>
