<template>
  <div class="reply" v-if="item.id>0">
    <i class="iconfont icon">&#xe717;</i>
    <span class="floor">#{{item.pub_floor}}</span>
    <span class="name">{{item.pub_nickname}}</span>
    <span class="onelineellops pub_cnt">{{item.pub_cnt}}</span>
    <i class="iconfont closeicon" @click="clearQuote">&#xe618;</i>
  </div>
</template>

<script>
    export default {
        name: "quoteitem",
        props:{
            item:{
                type:Object,
                default:function () {
                    return {}
                }
            }
        },
        methods:{
            clearQuote(){
                this.$emit('clearquote')
            }
        }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";

  .reply{
    line-height: 25px;
    padding: 10px;
    margin-bottom: 2px;
    border: 1px solid @border;
    border-bottom: none;
    background: #fff;
    display: flex;
    span,i{
      margin: 0 5px;
    }
    .closeicon{
      cursor: pointer;
      font-weight: bold;
      &:hover{
        opacity: 0.5;
      }
    }
    .pub_cnt{
      max-width: 200px;
      overflow: hidden;
    }
  }
</style>
