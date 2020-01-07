<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 left-box">
            <div class="imgwrap">
              <img class="img-circle" src="https://rails365.oss-cn-shenzhen.aliyuncs.com/letter_avatars/A/100.png" alt="">
            </div>
            <div class="username">
              张三@ xx公司
            </div>
            <div class="contact">
              <i class="iconfont">&#xe690;</i>
            </div>

            <div class="other">
              <div class="one">
                <div class="k">
                  注册时间
                </div>
                <div class="v">2019年12月12日 12:12:12</div>
              </div>
              <div class="one">
                <div class="k">
                  最后一次登录时间
                </div>
                <div class="v">2019年12月12日</div>
              </div>
            </div>
        </div>
        <div class="col-lg-8 right-box">
          <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">视频观看历史</a></li>
            <li role="presentation"><a href="#">学习的课程</a></li>
            <li role="presentation"><a href="#">收藏的视频</a></li>
            <li role="presentation"><a href="#">收藏的帖子</a></li>
            <li role="presentation"><a href="#">发布的帖子</a></li>
            <li role="presentation"><a href="#">回复的帖子</a></li>
            <li role="presentation"><a href="#">签到记录</a></li>
          </ul>
          <div class="right-content">
            <div class="history">
              <record></record>
              <record></record>
              <record></record>
              <record></record>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import loveandcomment from "../../components/common/loveandcomment";
    import record from "../../components/member/record";
    export default {
        name: "info",
        components:{
            loveandcomment,
            record
        }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";
  .left-box{
    background: #fff;
    padding: 20px;
    .imgwrap{
      text-align: center;
    }
    .username{
      line-height: 40px;
      text-align: center;
      padding-bottom: 10px;
      border-bottom: 1px solid @border;
      margin-bottom: 10px;
    }
    .one{
      display: flex;
      line-height: 30px;
      .k{
        color: @subtitle;
        margin-right: 10px;
        width:140px;
      }
      .v{
        color: @title;
      }
    }
    .contact{
      text-align: center;
      cursor: pointer;
      border-bottom: 1px solid @border;
      padding-bottom: 10px;
      margin-bottom: 10px;
      i{
        font-size:40px;
        &:hover{
          color: @subColor;
        }
      }
    }
  }

  .right-box{
    .nav-tabs{
      background: #fff;
    }
    .right-content{
      background: #fff;
    }
    .history{
      padding:30px;
      .item{
        display: flex;
        padding: 15px;

        .l{
          margin-top: 5px;
          img{
            max-width: 60px;
            max-height: 30px;
          }
        }

        .r{
          margin-left: 15px;
          line-height: 25px;
        }
      }
    }
  }

</style>
