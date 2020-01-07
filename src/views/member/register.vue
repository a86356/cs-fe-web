<template>
    <div class="container register-box">

      <div class="panel panel-default panel-success">
        <div class="panel-heading"><i class="iconfont">&#xe625;</i>
          用户注册</div>
        <div class="panel-body">
          <form>
            <div class="form-group">
              <label >用户名</label>
              <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入用户名">
            </div>
            <div class="form-group">
              <label >昵称</label>
              <input type="text" class="form-control"  placeholder="请输入昵称">
            </div>
            <div class="form-group">
              <label>邮箱</label>
              <input type="email" class="form-control"  placeholder="请输入邮箱">
            </div>
            <div class="form-group">
              <label >手机号</label>
              <input type="text" class="form-control"  placeholder="请输入手机号">
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-default ">点击发送验证码</button>
            </div>
            <div class="form-group">
              <label >验证码</label>
              <input type="text" class="form-control"  placeholder="请输入验证码">
            </div>
            <div class="form-group">
              <label >密码</label>
              <input type="password" class="form-control"  placeholder="请输入不少于6位数的密码" value="">
            </div>
            <button type="submit" class="btn btn-register" >注册</button>
          </form>
        </div>
        <div class="panel-footer">
          <button type="button" class="btn btn-link">
            <i class="iconfont">&#xe7bc;</i>
            返回首页
          </button>
          <button type="button" class="btn btn-link">
            <i class="iconfont">&#xe600;</i>

            用户登录
          </button>
          <button type="button" class="btn btn-link">
            <i class="iconfont">&#xe614;</i>

            找回密码</button>
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
  .register-box{
    background: #fff;
    margin-bottom: 30px;
    padding: 20px;
  }
  .btn-register{
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }

</style>
