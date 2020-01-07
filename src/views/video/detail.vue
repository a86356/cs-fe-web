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
              <div id="dplayer"></div>
              <div class="prevnext">
                <button class="btn btn-success"> 上一集</button>
                <button class="btn btn-success"> 下一集</button>
              </div>
            </div>

            <commentitem></commentitem>
            <commentpublishbox></commentpublishbox>
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
                <div class="item">
                  <span class="leading">
                    1 -
                  </span>
                  <span class="free icon">
                    Free
                  </span>
                  <span class="tit">
                   - Ant Design Pro v4 基于角色的权限访问v4 基于角色的权限访问v4 基于角色的权限访问控制实战教程 #3 使用 umi ui 创建项目
                  </span>
                </div>
                <div class="item">
                  <span class="leading">
                    <i class="iconfont">&#xe62b;</i> -
                  </span>
                  <span class="vip icon">
                    Vip
                  </span>
                  <span class="tit">
                   - Ant Design Pro v4 基于角色的权限访问控制实战教程 #3 使用 umi ui 创建项目
                  </span>
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
    import commentpublishbox from "../../components/comment/commentpublishbox";
    import commentitem from "../../components/comment/commentitem";
    export default {
        data(){
            return {
                content:"",

            }
        },
        components:{
            videolist,
            loveandcomment,
            commentpublishbox,
            commentitem
        },
        mounted() {
            const dp = new DPlayer({
                container: document.getElementById('dplayer'),
                screenshot: true,
                video: {
                    url: 'http://cdn.cs1024.com/92cf60b9f266f475fe17859e0e377a1b.m3u8',
                    type: 'hls'
                },
                subtitle: {
                    url: 'webvtt.vtt',
                },

                lang:'zh-cn',
                logo:"http://cdn.cs1024.com/cetteach1024.png?imageslim"
            });
        }


    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";


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
      padding-bottom: 10px;
      margin-bottom: 5px;
      line-height: 24px;
      .icon{
        padding: 3px 6px;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        margin: 0 3px;
      }
      .free{
        background: @green;
      }
      .vip{
        background: @red;
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
