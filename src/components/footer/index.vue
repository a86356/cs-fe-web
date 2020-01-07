<template>

      <div class="container-fluid footerwrap">
        <div class="container">
          <div class="tit">我们的愿景:帮助更多人学习编程,获得更好的生活</div>
          <div class="copyright">
            本站所有课程内容版权归cs1024.com所有 | 浙ICP备18024193号-4

          </div>
          <div class="text-center" style="line-height: 30px;">工信部网站（http://www.beian.miit.gov.cn）</div>

          <div class="contact text-center" style="line-height: 25px;">
              qq:100000356
          </div>
        </div>
      </div>


</template>

<script>

    export default {
        name: "Login",
        data() {
            return {

            };
        },
        created() {

        },
        methods: {

            nav(item){
                let {index } = item;
                this.navIndex= index;
            },

        }
    };
</script>

<style lang="less">

  @import "../../assets/css/common.less";


  .footerwrap{
    background: #fff!important;
    padding-bottom: 20px;
    margin-top: 20px;
    .tit{
      font-size: 16px;
      padding: 30px 0;
      text-align: center;
      margin-bottom: 10px;
      border-bottom: 1px solid @border;
    }
    .copyright{
      text-align: center;
    }
    .container{
      background: #fff;
    }
  }

</style>
