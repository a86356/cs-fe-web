<template>
  <div>



    <nav class="navbar navbar-custom navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="../../assets/images/logo.png" alt="">
          </a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <!--            <li class="active" @click="nav('home')"><a href="#">首页</a></li>-->
            <!--            <li  @click="nav('detail')"><a href="#about">课程详情</a></li>-->
            <!--            <li><a href="#contact">教学模式</a></li>-->
            <!--            <li><a href="#contact">视频试看</a></li>-->
            <!--            <li><a href="#contact">联系我们</a></li>-->

            <li v-for="(item,index) in navList" :key="index"
                :class="navIndex===item.index?'active':''"
                @click="goNav(item)"
            >
              {{item.title}}{{navIndex}}
            </li>
          </ul>
        </div>
      </div>
    </nav>


  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                navIndex:1,
                navList:[
                    {
                        title:"首页",
                        index:1,
                        path:'/home'
                    },
                    {
                        title:"课程详情",
                        index:2,
                        path:"/classdetail"
                    },
                    {
                        title:"教学模式",
                        index:3
                    },
                    {
                        title:"视频试看",
                        index:4
                    },
                    {
                        title:"联系我们",
                        index:5
                    },
                ]

            };
        },
        created() {

        },
        methods: {
            goNav(item){

                let {index,path } = item;
                this.navIndex= index;
                this.$router.push({path:path});

                console.log(this.$data)
            },

        }
    };
</script>

<style lang="less">

  @import "../../assets/css/common.less";

  .navbar-custom{
    background: #fff;
  }
  .navbar-brand{
    height: 50px;
    padding: 0;
    img{
      margin-top: 5px;
      width: 140px
    }
  }
  .navbar-toggle{
    border:1px solid @primary-color;
    .icon-bar{
      background: @primary-color;
    }
  }

  .navbar-custom .navbar-nav>li {
    color: @color-title;
    font-size: 16px;
    padding: 15px;
    cursor: pointer;
  }

  .navbar-custom .navbar-nav .active {
    color: @primary-color;
    border-bottom: 3px solid @primary-color;
  }
  .containerwrap{
    min-width: 1200px;
    height: calc(100vh - 110px);
    min-height: 580px;
    padding-top: 180px;
    background:url("../../assets/images/home_bg.png") no-repeat  0 0;
    background-size: cover;

  }
  .left-box{
    color: #fff;
    .title{
      font-size: 50px;
      margin-bottom: 20px;
    }
    .subtitle{
      font-size: 16px;
      line-height: 1.5;
    }
  }

  .right-box{
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    .item:hover{
      animation: heart 0.5s ;
    }
    .item{
      padding: 10px;
      width: 220px;
      height: 150px;
      color: #fff;
      text-align: center;
      margin:  0 0 15px 15px;

      h1{
        text-align: center;
        font-size: 30px;
      }
      p{
        font-size: 18px;
      }
    }
    .one{
      background: @success-color;
    }
    .two{
      background: @primary-color-light;
    }
    .three{
      background: @error-color;
    }
    .four{
      background: @info-color;
    }
    .five{
      background: @warning-color;
    }
    h1{

    }
  }

  @keyframes heart {
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(1.1);
    }
    100%{
      transform: scale(1);
    }
  }



  @media (max-width: 1024px) {
    .containerwrap{
      width: 100%;
      min-width: 100%;
      height: auto;
      padding-top: 50px;
    }

    .right-box .item{
      width: 100%;
      margin-left: 0;
    }
  }
</style>
