<template>
    <div class="container register-box">

      <div class="panel panel-default panel-success">
        <div class="panel-heading"><i class="iconfont">&#xe625;</i>
          用户注册</div>
        <div class="panel-body">
          <div>
            <div class="form-group">
              <label >用户名</label>
              <input  type="text" class="form-control" v-model="data1.username" placeholder="请输入用户名">
            </div>
            <div class="form-group">
              <label >昵称</label>
              <input  type="text" class="form-control" v-model="data1.nickname"  placeholder="请输入昵称">
            </div>
            <div class="form-group">
              <label>邮箱</label>
              <input  type="email" class="form-control" v-model="data1.email"  placeholder="请输入邮箱">
            </div>
            <div class="form-group">
              <label >手机号</label>
              <input  type="text" class="form-control" v-model="data1.phone"  placeholder="请输入手机号">
            </div>
            <div class="form-group">
              <send-code :phone="data1.phone" type="2"></send-code>
            </div>
            <div class="form-group">
              <label >验证码</label>
              <input  type="text" class="form-control" v-model="data1.code" placeholder="请输入验证码">
            </div>
            <div class="form-group">
              <label >密码</label>
              <input  type="password" class="form-control" v-model="data1.password"  placeholder="请输入不少于6位数的密码" value="">
            </div>
            <button type="submit" class="btn btn-register" @click="register">注册</button>
          </div>
        </div>
        <div class="panel-footer">
          <go-home></go-home>
          <go-login></go-login>
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
    import sendCode from "../../components/member/sendcode";


    export default {
        name: "index",
        data(){
            return {
                rule: {
                    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
                    nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
                    email: [{ email: true, message: "请输入邮箱", trigger: "blur" }],
                    phone: [{ phone: true, message: "手机号格式错误", trigger: "blur" }],
                    code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
                    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
                },
            }
        },
        components:{
            goHome,
            goRegister,
            goLogin,
            goForgetpwd,
            sendCode
        },
        mounted() {

        },
        methods:{
            register(){
              let rule = this.switchRule(this.rule);
              let ret=this.$validator.runwithobj(rule,this.data1);
              if(ret.result!='success'){
                  this.showmsg('info',ret.msg);
                  return;
              }


              this.$api({
                  service:"member.register",
                  ...this.data1
              }).then(res=>{
                  this.showmsg('success','注册成功');

                  let that =this;
                  setTimeout(()=>{
                      this.gohome();
                  },2000)

                  console.log(res);
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
  .btn-register{
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }

</style>
