<template>
  <div style="text-align:center;padding-top:10%">
    <div style="margin-bottom: 20px;text-align: center;" @click="goHome">
      <h1></h1>
      <img src="../../assets/images/logo.png" alt="图片" />
    </div>
    <div class="loginform">
      <base-form
        :form="form1"
        :data="data1"
        @login="login"
        @showModal="showModal"
        @showResigterModal="showResigterModal"
      ></base-form>
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
              {
                type: "text",
                name: "username",
                placeholder: "请输入用户名"
              },
              {
                type: "password",
                name: "password",
                placeholder: "请输入密码"
              },
              {
                type: "button",
                name: "登录",
                func: "login",
                color: "primary"
              }
            ]
          }
        ]
      }
    };
  },
  created() {},
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
.loginform {
  width: 200px;
  margin: 0 auto;
}
.forgetpassword {
  color: deepskyblue;
}
.forgetpassword:hover {
  text-decoration: underline;
}
</style>
