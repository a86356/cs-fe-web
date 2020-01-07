<template>
  <div class="container register-box">

    <div class="panel panel-default panel-primary">
      <div class="panel-heading">
        <i class="iconfont">&#xe622;</i>
        用户登录</div>
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label >账号</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入邮箱或者手机号">
          </div>
          <div class="form-group">
            <label >密码</label>
            <input type="password" class="form-control"  placeholder="请输入登录密码" >
          </div>
          <button type="submit" class="btn btn-primary">登录</button>
        </form>
      </div>
      <div class="panel-footer">
        <button type="button" class="btn btn-link">
          <i class="iconfont">&#xe7bc;</i>
          返回首页
        </button>
        <button type="button" class="btn btn-link">
          <i class="iconfont">&#xe71c;</i>

          用户注册
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

</style>
