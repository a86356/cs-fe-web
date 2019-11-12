<template>
  <div class="containerwrap">
    <div class="container-banner-wrap">
      添加qq:100000356，获取试看视频，请添加备注(行者课堂）
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
  .container-banner-wrap{
    width: 1200px;
    padding-top: 100px;
    padding-left: 15px;
    padding-right: 15px;
    height: 400px;
    background-size: cover;
    color: #000;
    text-align: center;
    background: #fff;
    font-size: 30px;
    margin: 20px  auto;
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
