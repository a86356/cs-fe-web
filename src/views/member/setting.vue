<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 ">
        <ul class="nav nav-pills nav-stacked">
          <li :class="tab==1?'active':''" @click="changeTab(1)">
            <i class="iconfont">&#xe649;</i>
            <span>基本信息</span>
          </li>
          <li :class="tab==2?'active':''"  @click="changeTab(2)">
            <i class="iconfont">&#xe60e;</i>
            <span>修改密码</span>
          </li>
        </ul>
      </div>
      <div class="col-lg-10 right-box">
        <div class="baseinfo" :class="tab==1?'':'hide'">
          <div class="tit">
            基本信息
          </div>
          <div class="form-horizontal">
            <div class="form-group">
              <label  class="col-sm-2 control-label">github</label>
              <div class="col-sm-10">
                <div class="input-group"><span class="input-group-addon">https://github.com/</span><input class="form-control" type="text" name="user[github]" v-model="data1.github"></div>
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">公司</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" v-model="data1.company">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">职位</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" v-model="data1.position">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">头像</label>
              <div class="col-sm-10">
                <div>
                  <input type="file" style="border:none"  class="form-control" @change="uploadavatar" >
                </div>
                <div class="avatarwrap" style="margin-top: 20px;margin-bottom: 20px;">
                  <img class="img-circle" :src="data1.avatar_url" alt="">
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-success" @click="saveuserinfo">保存</button>
              </div>
            </div>
          </div>

        </div>
        <div class="baseinfo" :class="tab==2?'':'hide'">
          <div class="tit">
            修改密码
          </div>
          <div class="form-horizontal">

            <div class="form-group">
              <label  class="col-sm-2 control-label">当前密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" v-model="data2.oldpwd">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">新密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control"  v-model="data2.newpwd">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">请再次输入新密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" v-model="data2.newpwdagain">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-info" @click="changepwd">更新密码</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';
    import config from "../../config/config";
    export default {
        name: "info",
        data(){
          return{
            tab:"1",
            data2:{}
          }
        },
        mounted(){
          this.checkLogin();

          this.getUerinfo();
        },
        methods:{
            getUerinfo(){
              this.$api({
                  service:"member.getmyuserinfo"
              }).then(res=>{

                  let {github}  =res;
                  let s;
                  if(github){
                     s = github.substr(19,github.length-1)
                  }
                  let d =res;
                  d.github = s;
                  this.data1=d;
              })
            },
            changepwd(){
                let {oldpwd,newpwd,newpwdagain} = this.data2;
                if(!oldpwd){
                    this.showmsg('info','请输入老密码');
                    return;
                }

                if(newpwd.length<6){
                    this.showmsg('info','新密码长度不得小于6位');
                    return;
                }

                if(newpwd.length>20){
                    this.showmsg('info','新密码长度不得超过20位');
                    return;
                }

                if(!newpwd){
                    this.showmsg('info','请输入新密码');
                    return;
                }
                if(!newpwdagain){
                    this.showmsg('info','请再次输入新密码');
                    return;
                }
                if(newpwd!=newpwdagain){
                    this.showmsg('info','两次输入的新密码不一致');
                    return;
                }

                //member.changepwd
                this.$api({
                    service:"member.changepwd",
                    oldpwd:oldpwd,
                    newpwd:newpwd
                }).then(res=>{
                    this.showmsg('success','密码修改成功');
                    this.$store.commit('logout')
                    this.goLogin();
                })
            },
            changeTab(index){
                this.tab=index;
            },
            saveuserinfo(){
              //member.saveuserinfo
              if(!this.data1.avatar_url){
                  this.showmsg('info','请上传头像');
                  return;
              }

              let github ='';

              if(this.data1.github){
                  github='https://github.com/'+this.data1.github;
              }

              this.$api({
                  service: "member.saveuserinfo",
                  github:github,
                  company:this.data1.company || '',
                  position:this.data1.position ||'',
                  avatar_url:this.data1.avatar_url
              }).then(res=>{
                  this.showmsg('info','保存成功')
              })

            },

        }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";

  .nav-stacked{
    background: #fff;
    padding: 20px;
    line-height: 30px;
    li{
      padding: 0 10px;
      cursor: pointer;
      color: @blue;
      &:hover{
        background: @border;
      }
    }
    .active{
      background: @blue;
      color: #fff;
      &:hover{
        background: @blue;
      }
    }
  }
  .right-box{
    background: #fff;
    padding: 20px;
    .baseinfo{
      .tit{
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid @border;
        margin-bottom: 20px;
        font-size: 18px;

      }

    }
  }

  .input-group-addon {
    padding: 7px 12px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1;
    color: #555555;
    text-align: center;
    background-color: #eeeeee;
    border: 1px solid @border;
    border-radius: 4px;
  }
  .input-group {
    position: relative;
    display: table;
    border-collapse: separate;
  }
</style>
