<template>
  <div class="">
    <div class="item">
      <div class="l">
        <img class="img-circle" src="https://rails365.oss-cn-shenzhen.aliyuncs.com/letter_avatars/A/100.png" alt="">
      </div>
      <div class="r">
        <div class="tit">视频视频的标题视频的标题视频的标题视频的标题视频的标题视频的标题视频的标题视频的标题视频的标题视频的标题的标题</div>
        <loveandcomment></loveandcomment>
      </div>
    </div>
  </div>
</template>

<script>
    import loveandcomment from "../../components/common/loveandcomment";

    export default {
        name: "info",
        components:{
            loveandcomment
        }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";

  .item{
    display: flex;
    padding: 15px;

    .l{
      margin-top: 5px;
      img{
        max-width: 60px;
        max-height: 30px;
      }
    }

    .r{
      margin-left: 15px;
      line-height: 25px;
    }
  }
</style>
