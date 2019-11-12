<template>
  <div>


    <contactQQ></contactQQ>

    <TopNav></TopNav>


    <div style="height: 55px"></div>

    <div class="containerwrap">
      <div class="container">

      </div>
    </div>


    <FooterIndex></FooterIndex>


  </div>
</template>

<script>
    import FooterIndex from '@/components/footer/index'
    import contactQQ from '@/components/contact/index'
    import TopNav from '@/components/navbar/index'

    export default {
        name: "Login",
        data() {
            return {
                navIndex:1,
                navList:[
                    {
                        title:"首页",
                        index:1
                    },
                    {
                        title:"课程详情",
                        index:2
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
            showResigterModal() {
                this.register.modal = true;
            },
            nav(item){
                let {index } = item;
                this.navIndex= index;

            },
        },
        components:{
            FooterIndex,
            contactQQ,
            TopNav
        }
    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";


  .containerwrap{
    width: 1200px;
    background:url("../../assets/images/class_bg_2.jpg") no-repeat  0 0;
    background-size: cover;
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
