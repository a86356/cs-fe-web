<template>
  <div>

    <nav class="navbar navbar-custom navbar-static-top navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <a @click="goHome" class="navbar-brand" href="#">行者课堂</a>

        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav" style="padding: 9px">
            <li :class="navIndex==1?'active':''"  @click="goHome">
              <i class="iconfont">&#xe9ce;</i>
              首页
            </li>
            <li :class="navIndex==10?'active':''"  @click="goNav(10,'/cs/videolastest')"> <i class="iconfont">&#xe682;</i>最新视频</li>
            <li :class="navIndex==20?'active':''"  @click="goNav(20,'/cs/videolist')"> <i class="iconfont">&#xe61f;</i>视频课程</li>
            <li :class="navIndex==30?'active':''"  @click="goNav(30,'/cs/postlist')"> <i class="iconfont">&#xe67b;</i>社区讨论</li>
            <li :class="navIndex==40?'active':''"  @click="goNav(40,'/cs/checkin')"> <i class="iconfont">&#xe604;</i>打卡签到</li>
            <li :class="navIndex==50?'active':''" class="aixin"  @click="goNav(50,'/cs/subscribe')">
              <i class="iconfont icon-aixin"></i>
              订阅本站
            </li>
            <li :class="navIndex==60?'active':''"   @click="goNav(60,'/cs/contactus')"><i class="iconfont">&#xe617;</i>
              联系我们
            </li>

          </ul>

          <ul class="nav navbar-nav navbar-right" v-show="!islogin">

            <li style="margin: 0 5px;">
              <button type="button" class="btn btn-default trans" @click="goRegister" >注册</button>
            </li>
            <li>
              <button type="button" class="btn btn-primary trans" @click="goLogin">登录</button>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right a" v-show="islogin">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="iconfont">&#xe603;</i>{{getUsername}} <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li @click="goSetting"><a href="#">基本设置</a></li>
                <li @click="gomemberinfo"><a href="#">个人信息</a></li>
                <li role="separator" class="divider"></li>
                <li @click="logout"><a href="#">退出</a></li>
              </ul>
            </li>
          </ul>


        </div>
      </div>
    </nav>

    <div style="height: 110px"></div>

  </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    import {createNotify} from "../utils/notify";

    export default {
        name: "Login",
        data() {
            return {
                navIndex:1,
            };
        },
        created() {

        },
        computed:{
            // ...mapState({
            //     islogin:state=>state.islogin,
            //     username:state=>state.username
            // }),
            ...mapGetters(['islogin','getUsername'])
        },
        methods: {
            goNav(index,path){

                this.navIndex= index;
                this.$router.push({path:path});

            },
            goHome(){
                this.$router.push({path:'/home'});
            },
            gomemberinfo(){

              this.checkLogin();

              let userinfo = this.getCache('userinfo')
              let nickname = JSON.parse(userinfo).nickname
              this.$router.push({path:'/cs/memberinfo',query:{tab:1,nickname:nickname}});
            },
            logout(){
                let that= this;
                this.$Modal.confirm({
                    title:"退出",
                    content:"是否退出",
                    onOk(){
                        that.$store.commit('logout')
                    },
                    onCancel(){

                    }
                })
            }

        }
    };
</script>

<style lang="less" scoped>

  @import "../assets/css/common.less";

  .navbar-custom{
    background: #fff;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
    border-bottom: 2px solid @mainColor;
    z-index: 5000;
    .container{
      .navbar-brand{
        font-weight: bold;
        font-size: @fz-lg;
        color: @mainColor;
        &:hover{
          opacity: 0.5;
        }
      }
      .navbar-nav{
        background: #fff;
        li{
          color: @titleColor;
          font-size:0.16rem;
          line-height: 50px;
          padding: 0 15px;
          cursor: pointer;
          font-weight: bold;
          &:hover{
            color: @activedTitleColor;
          }

          i{
            margin-right: 5px;
          }
        }
        .active {
          color: @activedTitleColor;
        }
        .aixin{
          color: @red!important;
          &:hover{
            color: @red!important;
          }
        }

      }
    }
    .right-box{
      height: 70px;
      padding: 10px 0;
    }

    .navbar-right{
      padding: 9px;
      padding-right: 15px;
    }
  }


  .btn-default{
    color: @mainColor;
    border-color: @mainColor;
    &:hover{
      background: @mainColor;
      color: #fff;
    }
  }


  .btn-link{
    color: @mainColor;
    &:hover{
      opacity: 0.7;
    }
  }

  .navbar-toggle{
    border:1px solid @mainColor;
    .icon-bar{
      background: @mainColor;

    }
  }

  .navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse {
    max-height: 400px;
  }


  .navbar-right li{
    padding: 0!important;
  }
  .navbar-custom .container .navbar-nav li{
    padding: 0 10px;
  }
  .navbar-header{
    padding: 9px 0;
  }
</style>
