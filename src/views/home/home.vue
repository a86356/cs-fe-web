<template>
  <div style="position: relative" >
      <Navbar></Navbar>


      <router-view />
      <MyFooter></MyFooter>
    <div @click="nav('/cs/home')">首页</div>
    <div @click="nav('/cs/videolist')">视频列表</div>
    <div @click="nav('/cs/videodetail')">视频详情</div>
    <div @click="nav('/cs/checkinindex')">签到</div>
    <div @click="nav('/cs/register')">注册</div>
    <div @click="nav('/cs/login')">登录</div>
    <div @click="nav('/cs/forgetpassword')">忘记密码</div>
    <div @click="nav('/cs/postpublish')">发帖子</div>
    <div @click="nav('/cs/postlist')">帖子列表</div>
    <div @click="nav('/cs/postdetail')">帖子详情</div>
    <div @click="nav('/cs/contactus')">联系我们</div>
    <div @click="nav('/cs/subscribe')">订阅</div>
    <div @click="nav('/cs/setting')">个人设置</div>
    <div @click="nav('/cs/memberinfo')">我的信息</div>
  </div>
</template>

<script>


    import Navbar from '../../components/navbarIndex'
    import MyFooter from '../../components/footer/index'
    export default {
      components:{
          Navbar,
          MyFooter
      }
    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";



</style>
