<template>

  <div class="container">

    <h1>您所查看的页面不存在<small>将于 <span class="red">{{time}}</span> 秒后回到首页</small></h1>


  </div>


</template>

<script>
    export default {
        name: "notfound",
        data(){
            return{
               time:3
            }
        },
        mounted() {
          setInterval(()=>{

              this.time--;

              if(this.time==0){
                this.gohome();
              }
          },1000);
        }
    }
</script>

<style scoped lang="less">
.container{
  background: #fff;
  margin-bottom: 20px;
  padding: 40px;
}
  .red{
    color: red;
  }
</style>
