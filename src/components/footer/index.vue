<template>
  <div>

    <div class="footer">
      <div class="footer-container">
<!--        <div class="footer-navlist">-->
<!--          <div class="item">课程详情</div>-->
<!--          <div class="item">教学模式</div>-->
<!--          <div class="item">视频试看</div>-->
<!--          <div class="item">联系我们</div>-->
<!--        </div>-->
        <div class="copyright">
          本站所有课程内容版权归cs1024.com所有 | 浙ICP备18024193号-4
        </div>
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


  .footer{

    .footer-container{
      width: 100%;
      margin: 15px auto;
      text-align: center;
      .footer-navlist{
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        .item{
          padding: 0 15px;
          cursor: pointer;

          &:hover{
            text-decoration: underline;
            color: @error-color;
          }
        }
      }
    }

  }



</style>
