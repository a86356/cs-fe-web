<template>
  <div class="container">

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-6">


          <div class="top">
            <div class="tit">帖帖子的帖子的帖子的帖子的的帖子的帖子的帖子的帖子的帖子的帖子的帖子的帖子的帖子帖子的帖子的帖子的帖子的帖子的帖子的帖子的帖子的帖子的帖子的帖子的帖子的子的标题</div>
            <div class="info">
              发布于19小时前 / 最新评论19小时之前 / 评论数:1 / 收藏数:1
            </div>
            <div class="cnt">
              栈是是的数据到世界第哦啊三角地阿斯顿
            </div>
            <div class="love">

              <button class="btn btn-default"> <i class="iconfont icon" >&#xe613;</i><span>收藏 | 0</span></button>
            </div>
            <div class="loveperson clearfix">
              <div class="item">
                <div class="avatarwrap">
                  <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                </div>
              </div>
            </div>
          </div>

         <commentitem></commentitem>
         <commentpublishbox></commentpublishbox>

        </div>


        <div class="col-lg-4 col-md-4 col-sm-6 right">
          <div class="">
            <div class="panel panel-default">

              <div class="panel-body introduction">
                  <div class="avatarwrap">
                    <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                  </div>
                  <div class="name">张三@xx公司</div>
              </div>
              <div class="contact">
                <i class="iconfont" style="font-size: 30px;">&#xe690;</i>
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
                <div class="item">
                  <div class="avatarwrap">
                    <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                  </div>
                  <div class="r">
                    张三哈哈哈张三哈哈哈张三哈哈哈张三哈哈哈张三哈哈哈张三哈哈哈三哈哈哈张三哈哈哈张三哈三哈哈哈张三哈哈哈张三哈三哈哈哈张三哈哈哈张三哈三哈哈哈张三哈哈哈张三哈
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

    import commentitem from "../../components/comment/commentitem";
    import commentpublishbox from "../../components/comment/commentpublishbox";

    export default {
        data(){
            return {
                content:"",
            }
        },
        components:{
            commentitem,
            commentpublishbox
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
      line-height: 30px;
      color: @title;
      font-weight: bold;
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
  .panelbd{
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
