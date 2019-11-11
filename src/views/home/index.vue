<template>
  <div>

    <div class="nav-pc">
      <div class="navwrap">
        <div class="container">
          <div class="l">
            <div class="logo">
              <img src="../../assets/images/logo.png" alt="" style="width: 200px;height: 60px">
            </div>
            <div class="navlist">
              <div class="item active">首页</div>
              <div class="item">课程详情</div>
              <div class="item">教学模式</div>
              <div class="item">视频试看</div>
              <div class="item">联系我们</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="nav-mobile">

    </div>

    <!--首页content区域-->
    <div class="cntwrap">
      <div class="cnt">
        <div class="bg">
          <img src="../../assets/images/home_bg.png" alt="">
        </div>
        <div class="cnt-main">
          <div class="l">
            <div class="title">
              前端工程师
            </div>
            <div class="subtitle">
              零基础入门前端必备
            </div>
            <div class="tips">
              行者课堂的前端知识体系庞大,包含12大模块的专业训练,任何无编程经验的人都可以轻松学会。
              适合有志从事于前端开发的在校学生,转专业的朋友。我们有专业的老师为你解答编程中遇到
              的问题,让你快速提升开发水平
            </div>
            <div class="contactinfo">
              <div class="one item">
                课程详情
              </div>
              <div class="two item">
                教学模式
              </div>
              <div class="three item">
                qq交流群
              </div>
            </div>
          </div>
          <div class="r">

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
    import BaseConfig from "@/config/config";
    import { login } from "@/api/apis";
    import { setCacheData } from "@/utils/cache";
    import Validator from "@/utils/validator.js";

    export default {
        name: "Login",
        data() {
            return {
                form1: {
                    inline: true,
                    ref: "form1",
                    rule: {
                        username: [
                            { required: true, message: "请输入用户名", trigger: "blur" }
                        ],
                        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
                    },
                    formlist: [
                        {
                            title: "",
                            fields: [

                            ]
                        }
                    ]
                }
            };
        },
        created() {

        },
        methods: {
            showResigterModal() {
                this.register.modal = true;
            },

            login() {
                this.data1.service = "admin.login";

                this.$post(this.data1).then(res => {
                    setCacheData({ k: BaseConfig.TOKEN_KEY, v: res.auth_key });
                    this.nav({ path: BaseConfig.HOME_PATH });
                });
            },
            goHome() {
                this.data1.username = "cs";
                this.data1.password = "2";
                this.login();
            }
        }
    };
</script>

<style lang="less">

  @import "../../assets/css/common.less";


</style>
