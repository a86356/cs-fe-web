<template>
  <div class="r">
    <div class="tit" @click="goDetail(item)">
      {{item.title}}
    </div>
    <div class="bottom">
      <div class="type" :class="item.type=='1'?'checkin':'hide'">签到</div>
      <div class="type" :class="item.type=='2'?'comment':'hide'">文章</div>
      <div class="type" :class="item.type=='3'?'article':'hide'">评论</div>
      <div class="type" :class="item.type=='4'?'reply':'hide'">回复</div>
      <div class="type" :class="item.top=='2'?'top':'hide'">置顶</div>
      <div class="time">{{item.create_time|beforedateline}}之前</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "dynamicitemcnt",
        props:{
            item:{
                type:Object,
                default:function () {
                    return {}
                }
            }
        },
        methods:{
            goDetail(item){
                let {type} = item;

                if(type=='1'){
                    this.goCheckIn()
                }
                if(type=='2'){
                    this.goArticleDetail(item.sub_id)
                }

            },
        }
    }
</script>

<style scoped lang="less">
  @import "../assets/css/common.less";
  .checkin{
    background: @teal;
  }
  .comment{
    background: @primary;
  }
  .article{
    background: @success;
  }
  .reply{
    background: @yellow;
  }
  .top{
    background: @orange;
    margin-left: 5px;
  }
  .tit{
    line-height: 30px;
    color: @title;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
  .bottom{
    display: flex;
    line-height: 25px;
    .time{
      margin-left: 10px;
      color: @subtitle;
    }
    .type{
      color: #fff;

      font-size: 12px;
      padding: 0 6px;
      border-radius: 3px;
    }
  }
</style>
