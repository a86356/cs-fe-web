<template>
  <div class="container register-box">

    <div class="panel panel-default panel-danger">
      <div class="panel-heading"><i class="iconfont">&#xe66b;</i>
        忘记密码</div>
      <div class="panel-body">
        <form>
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
            <label>新密码</label>
            <input type="password" class="form-control"  placeholder="请输入不少于6位数的新密码" value="">
          </div>
          <div class="form-group">
            <label>再次输入</label>
            <input type="password" class="form-control"  placeholder="请再次输入新密码" value="">
          </div>
          <button type="submit" class="btn btn-forgetpassword">更新密码</button>
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
  .btn-forgetpassword{
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
  }

</style>
