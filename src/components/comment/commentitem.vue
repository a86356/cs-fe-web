<template>
  <div class="">

    <div class="middle">
      <div class="item" v-for="(item,index) in commentList" :key="index" v-if="commentList.length>0">
        <div class="l">
          <div class="avatarwrap">
            <img class="img-circle" :src="item.pub_avatar_url" alt="">
          </div>
        </div>
        <div class="r">
          <div class="tit">
            <span class="floor">#{{item.pub_floor}}</span>
            <span class="name">{{item.pub_nickname}}</span>
            <span class="time">{{item.create_time | cntime}}</span>
            <i class="iconfont icon" @click="quote(item)">&#xe717;</i>
          </div>
          <div class="cnt">
            <div class="quote" v-if="item.quote_floor>0">
              <div class="reply">回复：</div>
              <div class="ml5 mr5">#{{item.quote_floor}}</div>
              <div class="ml5 mr5">{{item.quote_nickname}}</div>
              <div class="onelineellops ml5 mr5 quote_cnt">{{item.quote_cnt}}</div>
            </div>

            <publishcontent :value="item.pub_cnt"></publishcontent>

          </div>
        </div>
      </div>

      <div class="item nomsg" v-if="commentList.length==0">
        暂无评论,快来发布吧~
      </div>
    </div>
  </div>
</template>

<script>
    import publishcontent from "../publishcontent";
    export default {
        data(){
            return {
                content:"",
                commentList:[],
                commentCount:0,
                page:1,
                type:1,

            }
        },

        props:{
          id:{
              type:String|Number
          }
        },
        components:{
            publishcontent
        },
        mounted() {
            this.getCommentList();
        },
        methods:{
            getCommentList(){
                this.$api({
                    service:"comment.getlist",
                    main_id:this.id,
                    type:this.type,
                    page:this.page
                }).then(res=>{
                    this.commentList=res.list;

                    this.commentCount = res.count;
                })
            },
            quote(item){
                this.$emit('setquote',item)
            }
        }


    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";
  .quote{
    display: flex;
    color: @green;
  }
  .quote_cnt{
    max-width: 200px;

  }
  .middle{
    background: #fff;
    margin: 10px 0;
    padding: 20px;
    .item{
      display: flex;
      padding-bottom: 15px;
      padding-top: 15px;
      border-bottom: 1px solid @border;
      .r{
        margin-left: 15px;
        flex: 1;
        .tit{
          color: @subtitle;
          position: relative;
          height: 40px;
          line-height: 40px;
          margin-bottom: 8px;
          .icon{
            position: absolute;
            right: 0;
            top: 0;
            font-size: 0.25rem;
            cursor: pointer;
            &:hover{
              color: @title;
            }
          }
        }
        .cnt{
          margin-top: 5px;
          color: @title;
          line-height: 25px;
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
