<template>
  <div class="containerwrap">


    <div class="container-contact-wrap">
      <div class="container">
        <div class="tit">联系我们</div>
        <div class="row">

          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="item">
              <div class="subtit">公众号</div>
              <div class="imgwrap">
                <img class="img-responsive" src="../../assets/images/gzh_qrcode.jpg" alt="">
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="item">
              <div class="subtit">微信</div>
              <div class="imgwrap">
                <img class="img-responsive" src="../../assets/images/wx_qrcode.png" alt="">
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div class="item">
              <div class="subtit">QQ</div>
              <div class="imgwrap">
                <img class="img-responsive" src="../../assets/images/qqcode.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

    export default {
        data() {
            return {
            };
        },
        created() {

        },
        methods: {
            contactqq(){

            }
        },
        components:{

        }
    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";

  .container-contact-wrap{

    color: #000;
    text-align: center;
    background: #fff;
    font-size: 30px;
    margin: 20px  auto;
    .tit{
      line-height: 80px;
    }

    .item{
      padding: 15px;
      border: 1px solid @border;
      img{
        width: 300px;
        height: 300px;
        margin: 0 auto;
      }
    }

  }


</style>
