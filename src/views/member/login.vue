<template>
  <div class="container register-box">

    <div class="panel panel-default panel-primary">
      <div class="panel-heading">
        <i class="iconfont">&#xe622;</i>
        用户登录</div>
      <div class="panel-body">
        <div>
          <div class="form-group">
            <label >账号</label>
            <input type="text" class="form-control" v-model="data1.account"  placeholder="请输入邮箱/手机号/用户名">
          </div>
          <div class="form-group">
            <label >密码</label>
            <input type="password"  v-model="data1.password"  class="form-control"  placeholder="请输入登录密码" >
          </div>
          <button type="submit" class="btn btn-primary" @click="login">登录</button>
        </div>
      </div>
      <div class="panel-footer">
        <go-home></go-home>
        <go-register></go-register>
        <go-forgetpwd></go-forgetpwd>
      </div>
    </div>
  </div>
</template>

<script>

    import goHome from "../../components/member/goHome";
    import goRegister from "../../components/member/goRegister";
    import goLogin from "../../components/member/goLogin";
    import goForgetpwd from "../../components/member/goForgetpwd";
    import config from "../../config/config";

    import {setCacheData} from "../../utils/cache";

    export default {
        name: "index",
        components:{
            goHome,
            goRegister,
            goLogin,
            goForgetpwd
        },
        data(){
            return {
                rule: {
                    account: [{ required: true, message: "请输入张户名", trigger: "blur" }],
                    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
                },
            }
        },
        methods:{
            login(){
                let rule = this.switchRule(this.rule);
                let ret=this.$validator.runwithobj(rule,this.data1);
                if(ret.result!='success'){
                    this.showmsg('info',ret.msg);
                    return;
                }

                this.$api({
                    service:"member.login",
                    ...this.data1
                }).then(res=>{
                    this.showmsg('success','登录成功');
                    this.$store.commit('login',{auth_key:res.auth_key,data:res.data})
                    this.gohome();
                })
            }
        }
    }
</script>

<style scoped lang="less">
  .register-box{
    background: #fff;
    margin-bottom: 30px;
    padding: 20px;
  }

</style>
