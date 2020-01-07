<template>
  <div class="">

    <div class="middle">
      <div class="item">
        <div class="l">
          <div class="avatarwrap">
            <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
          </div>
        </div>
        <div class="r">
          <div class="tit">
            <span class="floor">#12</span>
            <span class="name">张三</span>
            <span class="time">2020 12-12 12:12:21</span>
            <i class="iconfont icon">&#xe717;</i>
          </div>
          <div class="cnt">
            老师讲的挺好的老师讲的挺好的老师讲的挺好的老师讲的挺好的老师讲的挺好的老师讲的挺好的老师讲的挺好的老师讲的挺好的老师讲的挺好的老师讲的挺好的老师讲的挺好的老师讲的挺好的
          </div>
        </div>
      </div>

      <div class="item nomsg">
        暂无评论,快来发布吧~
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        data(){
            return {
                content:"",

            }
        },
        components:{
        }


    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";


  .middle{
    background: #fff;
    margin: 10px 0;
    padding: 20px;
    .item{
      display: flex;
      padding-bottom: 15px;
      border-bottom: 1px solid @border;
      .r{
        margin-left: 15px;
        .tit{
          color: @subtitle;
          position: relative;
          .icon{
            position: absolute;
            right: 0;
            top: 0;
            font-size: 0.16rem;
            cursor: pointer;
            &:hover{
              color: @title;

            }
          }
        }
        .cnt{
          margin-top: 5px;
          color: @title;
        }
      }
    }
  }
  .nomsg{
    line-height: 40px;
    font-size: 16px;
    padding-top: 15px;
  }


</style>
