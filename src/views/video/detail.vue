<template>
  <div class="container">



    <div class="container">


      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
          <div class="row ">

<!--
            <iframe class="myvideo" src="//player.bilibili.com/player.html?aid=52394734&cid=91696574&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
-->
            <div class="videowrap">
              <div :class="videotype=='cdn'?'':'hide'">
                <div id="dplayer"></div>
              </div>


              <div class="prevnext">
                <button class="btn btn-success"> 上一集</button>

                <button class="btn btn-success"> 下一集</button>
              </div>
            </div>
<!--            <commentitem></commentitem>-->
          </div>


        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 right">

          <div class="right-box">

            <div class="panel panel-default">
              <div class="panel-heading">
                <i class="iconfont">&#xe62b;</i>
                <span >视频列表</span>
              </div>
              <div class="panel-body panelbd">
                <div class="item hover-main" v-for="(item,index) in allseglist" :key="index" >
                  <div class="leading">

                    <span :class="item.seg_id==seg_id?'hide':''">{{item.sort}}</span>
                    <span :class="item.seg_id==seg_id?'':'hide'"><i class="iconfont">&#xe62b;</i></span>

                  </div>
                  <div class="free icon" :class="item.isvip==1?'free':'vip'">
                    {{item.isvip=='1'?'free':'vip'}}
                  </div>
                  <div class="tit">

                    <div class="top">
                      {{item.seg_name}}
                    </div>
                    <div class="duration">
                      ({{item.duration}})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-box">

            <div class="panel panel-default">
              <div class="panel-heading">
                <i class="iconfont">&#xe615;</i>
                <span>学习成员(1)</span>
              </div>
              <div class="panel-body panel-studymember">
                <div class="item">
                  <div class="avatarwrap">
                    <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                  </div>
                </div>
                <div class="item">
                  <div class="avatarwrap">
                    <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                  </div>
                </div>
                <div class="item">
                  <div class="avatarwrap">
                    <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div class="right-box">

            <div class="panel panel-default">
              <div class="panel-heading">
                <i class="iconfont">&#xe67f;</i>
                <span >学习进度</span>
              </div>
              <div class="panel-body panel-progress">
                <div class="item">
                  <div class="avatarwrap">
                    <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                  </div>
                  <div class="r">
                    <div class="r-tit" style="line-height: 45px">2小时前，学习了 5:20</div>
                    <div class="b">
                    </div>
                  </div>
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
    import loveandcomment from "../../components/common/loveandcomment";

    import 'dplayer/dist/DPlayer.min.css';
    import DPlayer from 'dplayer';

    import commentitem from "../../components/comment/commentitem";
    export default {
        data(){
            return {
                allseglist:[],
               // videourl:'http://cdn.cs1024.com/92cf60b9f266f475fe17859e0e377a1b.m3u8',
                videourl:'http://cdn.cs1024.com/92cf60b9f266f475fe17859e0e377a1b.m3u8',
                videotype:"",
                logo:'http://img.cs1024.com/images/cetteach1024.png',
                poster:'',
                seg_id:-1,
                seg_item:{},
                class_id:'',
            }
        },
        components:{
            videolist,
            loveandcomment,
            commentitem
        },
        mounted() {

          let {class_id,seg_id} =  this.$route.query
          this.class_id=class_id;
          this.seg_id=seg_id;
          this.initDp();
          this.loadAllSeg();
        },
        methods:{
            initDp(){
                const dp = new DPlayer({
                    container: document.getElementById('dplayer'),
                    screenshot: true,
                    video: {
                        url: this.videourl,
                        type: 'hls',
                        pic:this.poster
                    },
                    subtitle: {
                        url: 'webvtt.vtt',
                    },

                    lang:'zh-cn',
                    logo:this.logo
                });
            },
            loadAllSeg(){

                this.$api({
                    service:"videos.getallseg",
                }).then(res=>{
                    this.allseglist = res.list;

                    if(this.seg_id==-1){
                        this.seg_id = res.list[0].seg_id;

                    }

                    for (let i=0;i<this.allseglist.length;i++){
                        if(this.seg_id==this.allseglist[i].seg_id){
                            this.seg_item = this.allseglist[i];
                        }
                    }


                    this.loadOneSeg();

                })

            },
            loadOneSeg(){
                if(this.seg_id==-1)return;

                this.$api({
                    service:"videos.getoneseg",
                    seg_id:this.seg_id
                }).then(res=>{
                  let {ok,type,url} =res;
                  if(ok=='-1'){
                      this.goSubscribe()
                  }

                  this.videotype = type
                  this.videourl  = url;
                  if(type=='cdn'){

                     this.initDp();
                  }

                })

            }
        }


    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";

  .hover-main{
    cursor: pointer;
    &:hover{
      background: #ccc;

    }
  }
  #dplayer{
    .dplayer-logo{
      background: red;

    }
  }
  .dplayer-logo{
    max-width: 100px!important;
    max-height: 100px!important;
    right: 0!important;
    bottom: 0!important;
  }

  @media (min-width: 320px){
    .myvideo{
      width: 100%;
      height: 180px;
    }
  }

  @media (min-width: 768px){
    .myvideo{
      width: 100%;
      height: 210px;
    }
  }
  @media (min-width: 992px){
    .myvideo{
      width: 100%;
      height: 362px;
    }
  }
  @media (min-width: 1200px){
    .myvideo{
      width: 100%;
      height: 438px;
    }
  }
  .myvideo{
    width: 100%;
    border: none!important;
  }
  .panel-studymember{
    display: flex;
    .item{
      margin: 0 5px;
      cursor: pointer;
    }
  }
  .left{
    background: #fff;
  }
  .videowrap{
    background: #fff;
  }
  .prevnext{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .panel-progress{
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
  .panelbd{
    height: 300px;
    overflow: auto;

    .item{
      padding: 10px;
      display: flex;
      .leading{
        margin-right: 10px;
      }
      .icon{
        width: 35px;
        height: 25px;
        line-height: 25px;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        margin-right: 5px;
      }
      .free{
        background: @green;
      }
      .vip{
        background: @red;
      }
      .tit{
        line-height: 25px;
      }
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
