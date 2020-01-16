<template>
  <div class="container">
<!--    <div class="body">-->
<!--      <h5 class="maintitle">最新视频</h5>-->
<!--      <videolist></videolist>-->
<!--      <div class="more">-->
<!--        <span class="btn">查看更多</span>-->
<!--      </div>-->
<!--    </div>-->


    <div class="container comnu">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-6 left">

          <div class="panel panel-default">
            <div class="panel-heading">
              <i class="iconfont">&#xe67b;</i>
              <span >社区动态</span>
            </div>
            <div class="panel-body">
              <div class="content">

                <div class="box-item" v-for="(item,index) in list1" :key="index">
                  <avatarimg :avatar_url="item.avatar_url" :tips="item.nickname"></avatarimg>

                  <dynamicitemcnt :item="item"></dynamicitemcnt>

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
                <i class="iconfont">&#xe625;</i>
                <span >最新会员({{newmember.count}})</span>
              </div>
              <div class="panel-body clearfix">
                <div class="item" v-for="(item,index) in newmember.list" :key="index" >
                  <avatarimg :avatar_url="item.avatar_url" :tips="item.nickname"></avatarimg>
                </div>
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
    import classtips from "../../components/classtips";

    import avatarimg from "../../components/avatarimg";
    import dynamicitemcnt from "../../components/dynamicitemcnt";
    import pagination from "../../components/pagination";
    export default {
        components:{
            videolist,
            classtips,
            avatarimg,
            dynamicitemcnt,
            pagination
        },
        data(){
            return {
              newmember:{
                  list:[],
                  count:0
              },
              list1:[],
              counts:0
            }
        },
        mounted(){
          this.getnewmember();
          this.loadlist();
        },
        methods:{
            getnewmember(){
                this.$api({
                    service:"member.getnewmember"
                }).then(res=>{
                    this.newmember.list = res.list;
                    this.newmember.count = res.count;
                })
            },
            loadlist(){
                this.$api({
                    service:"community.getlist",
                    page:this.page
                }).then(res=>{
                    this.list1=res.list;
                    this.counts= res.count;
                })
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

  .body {
    background: #fff;
    padding: 20px;
    margin-bottom: 10px;
    .shadow-sm;
    .maintitle {
      line-height: 30px;
      text-align: center;
      border-bottom: 1px solid @border;
      margin-bottom: 30px;
      font-size: 14px;
    }
  }

  .comnu{
    margin-top: 50px;
    .left{
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
              background: @mainColor;
              font-size: 12px;
              padding: 0 8px;
              border-radius: 8px;
            }
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
          float: left;
          margin-left: 8px;
          margin-bottom: 8px;

        }
      }

    }
  }

</style>
