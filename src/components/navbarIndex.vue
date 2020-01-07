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
          <ul class="nav navbar-nav">
            <li :class="navIndex==1?'active':''"  @click="goHome">
              <i class="iconfont">&#xe9ce;</i>
              首页
            </li>
            <li :class="navIndex==2?'active':''"  @click="goNav(2,'/cs/videolist')"> <i class="iconfont">&#xe61f;</i>视频课程</li>
            <li :class="navIndex==3?'active':''"  @click="goNav(3,'/cs/postlist')"> <i class="iconfont">&#xe67b;</i>社区讨论</li>
            <li :class="navIndex==3?'active':''"  @click="goNav(4)"> <i class="iconfont">&#xe604;</i>打卡签到</li>
<!--            <li :class="navIndex==4?'active':''"  @click="goNav(5)"> <i class="iconfont">&#xe620;</i>在线文档</li>-->
            <li :class="navIndex==5?'activered':''" class="aixin"  @click="goNav(6)">
              <i class="iconfont icon-aixin"></i>
              订阅本站
            </li>
            <li :class="navIndex==6?'activered':''"   @click="goNav(6)"><i class="iconfont">&#xe617;</i>
              联系我们</li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <button type="button" class="btn btn-link">发帖</button>
            <button type="button" class="btn btn-default trans">注册</button>
            <button type="button" class="btn btn-primary trans">登录</button>
          </ul>
        </div>
      </div>
    </nav>

    <div style="height: 110px"></div>

  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                navIndex:1,

            };
        },
        created() {

        },
        methods: {
            goNav(index,path){
                this.navIndex= index;
                this.$router.push({path:path});

            },
            goHome(){
                this.$router.push({path:'/home'});
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
    z-index: 999999;
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
</style>
