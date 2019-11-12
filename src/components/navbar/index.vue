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
            <li v-for="(item,index) in navList" :key="index"
                :class="navIndex===item.index?'active':''"
                @click="goNav(item)"
            >
              {{item.title}}
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
                        path:'/home/index'
                    },
                    {
                        title:"课程详情",
                        index:2,
                        path:"/home/classdetail"
                    },
                    // {
                    //     title:"教学模式",
                    //     index:3,
                    //     path:"/home/teachmode"
                    // },
                    {
                        title:"视频试看",
                        index:4,
                        path:"/home/video"
                    },
                    {
                        title:"联系我们",
                        index:5,
                        path:'/home/contactus'
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

                console.log(this.navIndex)
            },

        }
    };
</script>

<style lang="less" scoped>

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

</style>
