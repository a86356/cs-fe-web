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
                <div class="box-item">
                  <div class="avatarwrap">
                    <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                  </div>
                  <div class="r">
                    <div class="tit">
                      分享Ant Design Pro 企业级后台实战视频已经录制完结，这是课程目录
                    </div>
                    <div class="bottom">
                      <div class="type">签到</div>
                      <div class="time">发布于1小时前</div>
                    </div>
                    <loveandcomment></loveandcomment>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 right">
          <div class="">
            <div class="panel panel-default">
              <div class="panel-heading">
                <i class="iconfont">&#xe6d1;</i>
                <span>课堂小提示</span>
              </div>
              <div class="panel-body">
                行者课堂是一个分享技术的社区,希望大家一起共同进步,共同成长
              </div>
              <div class="panel-footer" style="display: flex;justify-content: space-around">
                <button class="btn  btn-default">
                  <i class="iconfont">&#xe60a;</i>
                  签到打卡</button>
                <button class="btn  btn-info">
                  <i class="iconfont">&#xe6b0;</i>
                  发布帖子</button>
              </div>
            </div>

          </div>
          <div class="right-box">

            <div class="panel panel-default">
              <div class="panel-heading">
                <i class="iconfont">&#xe62e;</i>
                <span >活跃作者</span>
              </div>
              <div class="panel-body">
                <div class="item">
                  <div class="avatarwrap">
                    <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                  </div>
                  <div class="r">

                    <div class="r-tit">张三哈哈哈</div>
                    <div class="b">
                      <div class="name">前端@xx公司</div>
                    </div>

                  </div>

                </div>
                <div class="item">
                  <div class="avatarwrap">
                    <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                  </div>
                  <div class="r">
                    <div class="r-tit" style="line-height: 45px">linux的基本操作</div>
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

    export default {
        components:{
            videolist,
            loveandcomment
        }

    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";



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
