<template>
  <div class="container register-box">

    <div class="panel panel-default panel-danger">
      <div class="panel-heading"><i class="iconfont">&#xe66b;</i>
        忘记密码</div>
      <div class="panel-body">
        <div>
          <div class="form-group">
            <label >手机号</label>
            <input type="text" class="form-control" v-model="data1.phone"  placeholder="请输入手机号">
          </div>
          <div class="form-group">
            <sendcode :phone="data1.phone" type="3"></sendcode>
          </div>
          <div class="form-group">
            <label >验证码</label>
            <input type="text" class="form-control"  v-model="data1.code" placeholder="请输入验证码">
          </div>
          <div class="form-group">
            <label>新密码</label>
            <input type="password" class="form-control" v-model="data1.password"  placeholder="请输入不少于6位数的新密码" value="">
          </div>
          <div class="form-group">
            <label>再次输入</label>
            <input type="password" class="form-control" v-model="data1.passwordagain"  placeholder="请再次输入新密码" value="">
          </div>
          <button type="submit" class="btn btn-forgetpassword" @click="forgetpwd">更新密码</button>
        </div>
      </div>
      <div class="panel-footer">

        <go-home></go-home>
        <go-register></go-register>
        <go-login></go-login>

      </div>
    </div>
  </div>
</template>

<script>
    import goHome from "../../components/member/goHome";
    import goRegister from "../../components/member/goRegister";
    import goLogin from "../../components/member/goLogin";
    import sendcode from "../../components/member/sendcode";
    export default {
        name: "index",
        components:{
            goHome,
            goRegister,
            goLogin,
            sendcode
        },
        data(){
            return {
                rule: {
                    phone: [{ phone: true, message: "请输入正确的手机号", trigger: "blur" }],
                    code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
                    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
                    passwordagain: [{ required: true, message: "请再次输入密码", trigger: "blur" }]
                },
            }
        },
        methods:{
            forgetpwd(){
                let rule = this.switchRule(this.rule);
                let ret=this.$validator.runwithobj(rule,this.data1);
                if(ret.result!='success'){
                    this.showmsg('info',ret.msg);
                    return;
                }

                this.$api({
                    service:"member.forgetpwd",
                    ...this.data1
                }).then(res=>{
                    this.showmsg('success','修改成功');

                    setTimeout(()=>{
                        this.goLogin();
                    },2000)
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
  .btn-forgetpassword{
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
  }

</style>
