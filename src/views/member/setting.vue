<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 ">
        <ul class="nav nav-pills nav-stacked">
          <li class="active">
            <i class="iconfont">&#xe649;</i>
            <span>基本信息</span>
          </li>
          <li>
            <i class="iconfont">&#xe60e;</i>
            <span>修改密码</span>
          </li>
        </ul>
      </div>
      <div class="col-lg-10 right-box">
        <div class="baseinfo">
          <div class="tit">
            基本信息
          </div>
          <form class="form-horizontal">
            <div class="form-group">
              <label  class="col-sm-2 control-label">github</label>
              <div class="col-sm-10">
                <div class="input-group"><span class="input-group-addon">https://github.com/</span><input class="form-control" type="text" name="user[github]" id="user_github"></div>
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">昵称</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">公司</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">职位</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">头像</label>
              <div class="col-sm-10">
                <input type="file" style="border:none" class="form-control" placeholder="">
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-success">保存</button>
              </div>
            </div>
          </form>

        </div>
        <div class="baseinfo">
          <div class="tit">
            修改密码
          </div>
          <form class="form-horizontal">

            <div class="form-group">
              <label  class="col-sm-2 control-label">当前密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">新密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label  class="col-sm-2 control-label">请再次输入新密码</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-info">更新密码</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "info"
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";

  .nav-stacked{
    background: #fff;
    padding: 20px;
    line-height: 30px;
    li{
      padding: 0 10px;
      cursor: pointer;
      color: @blue;
      &:hover{
        background: @border;
      }
    }
    .active{
      background: @blue;
      color: #fff;
      &:hover{
        background: @blue;
      }
    }
  }
  .right-box{
    background: #fff;
    padding: 20px;
    .baseinfo{
      .tit{
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid @border;
        margin-bottom: 20px;
        font-size: 18px;

      }

    }
  }

  .input-group-addon {
    padding: 7px 12px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1;
    color: #555555;
    text-align: center;
    background-color: #eeeeee;
    border: 1px solid @border;
    border-radius: 4px;
  }
  .input-group {
    position: relative;
    display: table;
    border-collapse: separate;
  }
</style>
