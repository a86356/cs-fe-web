<template>
  <div>
    <div class="item" v-for="(item,index) in articleList" :key="index" @click="goArticleDetail(item.id)">
      <div class="avatarwrap">
        <img class="img-circle" :src="item.pub_avatar_url" alt="">
      </div>
      <div class="r">
        <div class="r-tit click">{{item.title}}</div>
        <div class="b">
          <div class="name">{{item.pub_nickname}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

    export default {
        name: "getnewarticle",

        data(){
            return {

                articleList:[]

            }
        },
        mounted() {
            this.$api({
                service:"article.lastest",
            }).then(res=>{
                this.articleList=res.list;
            })

        },
        methods:{
            loadlist(){

            },

        }
    }
</script>

<style scoped lang="less">
  @import "../assets/css/common.less";

  .item{
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid @border;
    margin-bottom: 10px;
    .r{
      margin-left: 15px;
      line-height: 25px;
      overflow: hidden;
      height: 50px;
      .twolineellips;

      .r-tit{

      }
    }
  }
</style>
