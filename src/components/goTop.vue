<template>
    <div class="goTop" v-if="show" @click="goTop">
      <i class="iconfont">&#xe6a4;</i>
    </div>
</template>

<script>
    export default {
        name: "goTop",
        data(){
          return {
              show:false
          }
        },
        mounted() {
            window.addEventListener('scroll',this.handler)
        },
        methods:{
          handler(e){
              let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
              if(scrollTop>=400){
                  this.show=true;
              }else{
                  this.show=false
              }
          },
          goTop(e){
              //document.body.scrollTop = document.documentElement.scrollTop =0;

              let timer= setInterval(()=>{
                  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                  if(scrollTop<=0){
                      clearInterval(timer)
                  }
                  scrollTop-=60;
                  document.body.scrollTop = document.documentElement.scrollTop =scrollTop;

              })
          }
        }
    }
</script>

<style scoped lang="less">

  @import "../assets/css/common.less";

  .goTop{
    position: fixed;
    right: 10%;
    bottom: 10%;
    cursor: pointer;
    opacity: 0.4;
    transition: all 0.2s;
    &:hover{
      opacity: 1;
    }
    i{
      font-size: 50px;
      color:@thirdColor;

    }
  }
</style>
