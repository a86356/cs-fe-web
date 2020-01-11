<template>
  <div class="loveandcomment">
    <div class="love">
      <i class="iconfont icon-aixin"></i>
      <span>{{lovenum}}</span>
    </div>
    <div class="comment">
      <i class="iconfont icon-pinglun1"></i>
      <span>{{commentnum}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "loveandcomment",
        props:{
            commentnum:{
                type:String|Number,
                default:''
            },
            lovenum:{
                type:String|Number,
                default:''
            }
        },
    }
</script>

<style scoped lang="less">

  @import "../../assets/css/common.less";


  .loveandcomment{
    display: flex;
    padding-bottom: 10px;
    margin-top: 5px;
    .love,.comment{
      background: @subColor;
      color: #fff;
      padding-right: 5px;
      margin-right: 5px;
      overflow: hidden;
      border-radius: 5px;
    }
    .iconfont{
      padding-left: 5px;
      color: #fff;
    }
  }
</style>
