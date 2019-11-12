<template>
  <div class="containerwrap">


    <div class="container-contact-wrap">
      <div class="container">
        <h1>联系我们</h1>
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-4">
            <div class="item">
              <h1>公众号</h1>
              <div class="imgwrap">
                <img src="../../assets/images/gzh_qrcode.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-1"></div>
          <div class="col-md-4">
            <div class="item">
              <h1>微信</h1>
              <div class="imgwrap">
                <img src="../../assets/images/wx_qrcode.png" alt="">
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
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
    width: 1200px;
    padding: 20px;
    background-size: cover;
    color: #000;
    text-align: center;
    background: #fff;
    font-size: 30px;
    margin: 20px  auto;



    .item{
      padding: 15px;
      border: 1px solid @color-border;
      img{
        width: 300px;
        height: 300px;
      }
    }

  }

  @media (max-width: 1024px) {
    .container-banner-wrap{
      width: 100%;
      .cnt{
        margin-top: 20px;
      }
    }

    .classlist-container-wrap{
      width: 90%;
      .item{
        width: 100%;
      }
    }
    .qa-wrap{
      width: 100%;
    }
  }

</style>
