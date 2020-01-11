<template>
  <div class="container">

    <div class="container comnu">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-6">


          <div class="panel panel-default">
            <div class="panel-heading">
              <i class="iconfont">&#xe67b;</i>
              <span >社区动态</span>
            </div>
            <div class="panel-body">
              <div class="content">

                <div class="box-item" v-for="(item,index) in list1" :key="index">
                  <div class="avatarwrap">
                    <img class="img-circle" :src="item.avatar_url" alt="">
                  </div>
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

                    <div v-if="item.type=='3'">
                      <loveandcomment></loveandcomment>
                    </div>
                  </div>
                </div>

              </div>
              <pagination :count="counts" v-if="counts>0"  @setpage="setpage"></pagination>
            </div>
          </div>

        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 right">
          <div class="">
            <classtips></classtips>

          </div>
          <div class="right-box">

            <div class="panel panel-default">
              <div class="panel-heading">
                <i class="iconfont">&#xe62e;</i>
                <span >最新文章</span>
              </div>
              <div class="panel-body">
                <getnewarticle></getnewarticle>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import videolist from "../../components/videolist";
    import loveandcomment from "../../components/common/loveandcomment";

    import pagination from "../../components/pagination";
    import getnewarticle from "../../components/getnewarticle";

    import classtips from "../../components/classtips";

    export default {
        components:{
            videolist,
            loveandcomment,
            pagination,
            classtips,
            getnewarticle
        },
        data(){
          return {

          }
        },
        mounted() {
            this.loadlist()
        },
        methods:{
            loadlist(){
                this.$api({
                    service:"community.getlist",
                    page:this.page
                }).then(res=>{
                    this.list1=res.list;
                    this.counts= res.count;
                })
            },
            goDetail(item){
                let {type} = item;

                if(type=='1'){
                    this.goCheckIn()
                }
                if(type=='2'){
                    this.goArticleDetail(item.id)
                }

            },
            setpage(params){
                this.goTopNow();
                this.page=params.page;
                this.loadlist();
            },
        }

    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";


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

  .comnu{
    margin-top: 50px;
    .left{
      .shadow-sm;
      .top{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid @border;
        margin-bottom: 10px;
        line-height: 40px;
        .tit{
        }
        .pub{
        }
      }

    }
    .content{
      .box-item{
        display: flex;
        padding-bottom: 10px;
        border-bottom: 1px solid @border;
        margin-bottom: 10px;
        .avatarwrap{
          margin-right: 15px;
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
      }
    }
    .right{
      .right-box{
        background: #fff;
        margin-bottom: 15px;
        .shadow-sm;
        .tit{
          font-size: 14px;
          line-height: 50px;
          margin-bottom: 10px;
          padding-left: 15px;
          border-bottom: 1px solid @border;
        }
        .item{
          display: flex;
          padding: 10px ;
          border-bottom: 1px solid @border;
          .avatarwrap{
            margin-right: 10px;
          }
          .r{
            .r-tit{
              line-height: 30px;
              color: @title;
              overflow: hidden;
              width: 100%;
              cursor: pointer;
              &:hover{
                text-decoration: underline;
              }
            }
            .b{
              display: flex;
              color: @subtitle;
              line-height: 25px;
              .name{
                margin-right: 10px;
              }
            }
          }

        }
      }

    }
  }

</style>
