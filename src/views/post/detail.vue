<template>
  <div class="container">

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-6">
          <div class="top">
            <div class="tit">{{data1.title}}</div>
            <div class="info">
              发布于{{data1.create_time|beforedateline}}前  / 阅读数:{{data1.views}} / 收藏数:{{data1.loves}} / 评论数:{{data1.commentnum}}
            </div>
            <publishcontent :value="data1.content_md"></publishcontent>

            <div class="love">

              <button class="btn btn-default" @click="toggleCollection"><i class="iconfont icon" :class="isCollected?'active':''" >&#xe663;</i><span>收藏 | {{data1.loves}}</span></button>
            </div>
            <div class="loveperson clearfix">
              <div class="item" v-for="(item,index) in loverlist" :key="index">
                <div class="avatarwrap">
                  <img class="img-circle" :src="item.avatar_url" alt="">
                </div>
              </div>
            </div>
          </div>

         <commentitem :id="this.id" v-if="id>0" @setquote="setquote" ref="commentitem"></commentitem>

         <quoteitem @clearquote="clearquote" :item="quote_item"></quoteitem>


          <div class="bottom">

            <div class="edit">
              <mdeditor @change="changemd" ref="mdeditor"></mdeditor>
            </div>
            <div class="btnwrap">
              <button class="btn btn-primary" @click="publish">发布评论</button>
            </div>
          </div>

      </div>


        <div class="col-lg-4 col-md-4 col-sm-6 right">
          <div class="">
            <div class="panel panel-default">

              <div class="panel-body introduction">
                  <div class="avatarwrap">
                    <img class="img-circle" :src="data1.pub_avatar_url" alt="">
                  </div>
                  <div class="name">{{data1.pub_nickname}}</div>
              </div>
              <div class="contact">
                <i class="iconfont" style="font-size: 30px;" @click="goGithub">&#xe690;</i>
              </div>
            </div>

          </div>
          <div class="right-box">

            <div class="panel panel-default">
              <div class="panel-heading">
                <i class="iconfont">&#xe619;</i>
                <span >最新帖子</span>
              </div>
              <div class="panel-body panelbd">
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

    import commentitem from "../../components/comment/commentitem";
    import publishcontent from "../../components/publishcontent";
    import getnewarticle from "../../components/getnewarticle";
    import quoteitem from "../../components/comment/quoteitem";
    import mdeditor from "../../components/mdeditor";

    export default {
        data(){
            return {
                content:"",
                id:"0",
                isCollected:false,
                loverlist:[],
                writerInfo:{},
                quote_id:'-1',
                quote_item:{},
                type:1,
                commentList:[],
                commentCount:0
            }
        },
        components:{
            commentitem,
            mdeditor,
            publishcontent,
            getnewarticle,
            quoteitem
        },
        mounted() {
            let {id} =  this.$route.query
            this.id=id;
            this.init();
            this.increaseview();
        },
        watch: {
            $route: function(newVal, oldVal) {
                if(newVal!=oldVal){
                    this.init();
                    this.goTopNow();
                }
            }
        },
        methods:{

            init(){
                let {id} =  this.$route.query
                this.id=id;
                this.loadDetail();
                this.getCollection();
                this.getalllovers();
            },
            changemd(e){

                this.content=e;
            },
            setquote(item){

                this.quote_id=item.id;
                this.quote_item=item;
            },
            clearquote(){
                this.quote_id=-1;
                this.quote_item={};
            },
            increaseview(){

                this.$api({
                    service:"article.increaseview",
                    main_id:this.id,
                    type:1
                }).then(res=>{

                })

            },
            publish(){

              if(this.content==''){
                  this.showmsg('info','未填写内容');
                  return;
              }
              if(this.content.length<3){
                  this.showmsg('info','评论内容不少于3个字');
                  return;
              }
              this.checkLogin();

              this.$api({
                  service:"comment.publish",
                  main_id:this.id,
                  cnt:this.content,
                  quote_id:this.quote_id,
                  type:this.type,
              }).then(res=>{
                  this.showmsg('success','发布成功');
                  this.goTopNow();
                  this.$refs.mdeditor.clear();
                  this.$refs.commentitem.getCommentList();
                  this.clearquote();

              })

            },
            loadDetail(){

                this.$api({
                    service:"article.getone",
                    id:this.id
                }).then(res=>{
                    this.data1=res.article;
                    this.writerInfo=res.writerinfo;

                })
            },
            getalllovers(){

                this.$api({
                    service:"article.getalllovers",
                    sub_id:this.id,
                    type:"1"
                }).then(res=>{
                   this.loverlist=res.list;
                })

            },
            getCollection(){

                this.$api({
                    service:"collect.getonecollection",
                    sub_id:this.id,
                    type:"1"
                }).then(res=>{
                    let {id}  =res;
                    if(id==0){
                        this.isCollected=false
                    }else{
                        this.isCollected=true
                    }
                })
            },

            toggleCollection(){

                this.checkLogin();

                if(this.isCollected){
                    this.$api({
                        service:"collect.cancelcollection",
                        sub_id:this.id,
                        type:"1"
                    }).then(res=>{
                        this.isCollected=false

                        this.loadDetail();
                        this.getalllovers();
                    })
                }else{
                    this.$api({
                        service:"collect.addcollection",
                        sub_id:this.id,
                        type:"1"
                    }).then(res=>{
                        this.isCollected=true
                        this.loadDetail();
                        this.getalllovers();
                    })
                }
            },

        }



    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";



  .top{
    background: #fff;
    padding: 20px;
    margin-bottom: 15px;
    .shadow-sm;
    .tit{
      color: @title;
      font-weight: bold;
      font-size: 30px;
      line-height: 1.5;
    }
    .info{
      line-height: 40px;
      border-bottom: 1px solid @border;
      color: @subtitle;
    }
    .cnt{
      padding-top: 20px;
      min-height: 200px;
      border-bottom: 1px solid @border;
      line-height: 30px;
      color: @title;
      padding-bottom: 20px;
      margin-bottom: 20px;
      .twolineellips;
    }
    .love{
      text-align: center;
      line-height: 25px;
      position: relative;
      .icon{
        margin-right: 4px;
      }
      span{
        font-size: 16px;
      }
      .active{
        color: @red;
      }
    }
    .loveperson{
      background: #fff;
      padding:20px;
      .item{
        float: left;
        cursor: pointer;
      }
    }
  }

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

  .bottom{
    background: #fff;

    .btnwrap{
      text-align: right;
      padding: 10px ;
    }
    .reply{
      line-height: 30px;
      padding: 10px;

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
    }
  }
  .introduction{
    text-align: center;
    border-bottom: 1px solid @border;
    img{
      width: 80px;
      height: 80px;
      padding: 5px;

    }
    .name{
      line-height: 40px;
    }
  }

  .contact{
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    &:hover{
      color: @subColor;
    }
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
