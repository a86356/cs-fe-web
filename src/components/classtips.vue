<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <i class="iconfont">&#xe6d1;</i>
      <span>课堂小提示</span>
    </div>
    <div class="panel-body">
      行者课堂是一个分享技术的社区,希望大家一起共同进步,共同成长
    </div>
    <div class="panel-footer" style="display: flex;justify-content: space-around">
      <button class="btn  btn-default" @click="goCheckIn">
        <i class="iconfont">&#xe60a;</i>
        签到打卡</button>
      <button class="btn  btn-info" @click="publistpost">
        <i class="iconfont">&#xe6b0;</i>
        发布帖子</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "classtips",
        methods:{

        }
    }
</script>

<style scoped>

</style>
