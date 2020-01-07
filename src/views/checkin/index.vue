<template>
  <div class="container">
    <div class="panel panel-default shadow-sm">
      <div class="panel-heading">每日签到</div>
      <div class="panel-body">

        <div class="startcheck">
          <div class="">
            <input type="text" class="form-control" placeholder="请输入你今天想说的话" aria-describedby="basic-addon2">
          </div>
          <div class="icons clearfix">
            <div class="checkpic active">
              <img src="../../assets/images/checkin/kx.gif" alt="开心">

            </div>
            <div class="checkpic">
              <img src="../../assets/images/checkin/ng.gif" alt="难过">
            </div>
            <div class="checkpic">
              <img src="../../assets/images/checkin/ym.gif" alt="郁闷">
            </div>
            <div class="checkpic">
              <img src="../../assets/images/checkin/wl.gif" alt="无聊">
            </div>
            <div class="checkpic">
              <img src="../../assets/images/checkin/nu.gif" alt="怒">
            </div>
            <div class="checkpic">
              <img src="../../assets/images/checkin/ch.gif" alt="擦汗">
            </div>
            <div class="checkpic">
              <img src="../../assets/images/checkin/fd.gif" alt="奋斗">
            </div>
            <div class="checkpic">
              <img src="../../assets/images/checkin/yl.gif" alt="慵懒">
            </div>
            <div class="checkpic">
              <img src="../../assets/images/checkin/shuai.gif" alt="衰">
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-primary trans">点我签到</button>

      </div>
    </div>

    <div class="panel panel-default shadow-sm">
      <div class="panel-heading">今日签到排行</div>
      <div class="panel-body">
        <table class="table table-bordered table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th>会员</th>
              <th>今日签到时间</th>
              <th>总签到天数</th>
              <th>月签到天数</th>
              <th>签到心情</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >

                <img style="width: 45px;height: 45px;" class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                张三
              </td>
              <td >
                2020-01-04 00:59:14
              </td>
              <td>
                199
              </td>
              <td>
                4
              </td>
              <td>
                心情不错哦
              </td>
            </tr>
            <tr>
              <td >

                <img style="width: 45px;height: 45px;" class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                张三
              </td>
              <td >
                2020-01-04 00:59:14
              </td>
              <td>
                199
              </td>
              <td>
                4
              </td>
              <td>
                心情不错哦
              </td>
            </tr>
            <tr>
              <td >

                <img style="width: 45px;height: 45px;" class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                张三
              </td>
              <td >
                2020-01-04 00:59:14
              </td>
              <td>
                199
              </td>
              <td>
                4
              </td>
              <td>
                心情不错哦
              </td>
            </tr>
            <tr>
              <td >

                <img style="width: 45px;height: 45px;" class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                张三
              </td>
              <td >
                2020-01-04 00:59:14
              </td>
              <td>
                199
              </td>
              <td>
                4
              </td>
              <td>
                心情不错哦
              </td>
            </tr>
            <tr>
              <td >

                <img style="width: 45px;height: 45px;" class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                张三
              </td>
              <td >
                2020-01-04 00:59:14
              </td>
              <td>
                199
              </td>
              <td>
                4
              </td>
              <td>
                心情不错哦
              </td>
            </tr>
            <tr>
              <td >

                <img style="width: 45px;height: 45px;" class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">
                张三
              </td>
              <td >
                2020-01-04 00:59:14
              </td>
              <td>
                199
              </td>
              <td>
                4
              </td>
              <td>
                心情不错哦
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";

  .startcheck{
    .shadow-sm;
    .icons{
      margin: 15px 0;
      padding-bottom: 20px;
    }
    .checkpic{
      float: left;
      padding: 8px;
      border: 4px solid @border;
      border-radius: 8px;
      background: #f3f3f3;
      margin-right: 8px;
      cursor: pointer;
    }

    .active{
      border-color: @mainColor;
    }
  }

  .table {

    tbody{
      td{
        line-height: 45px;
      }
    }
  }
</style>
