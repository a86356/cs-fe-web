<template>
  <div class="contact">
    <i class="iconfont" style="font-size: 30px;" @click="goGithub">&#xe690;</i>
  </div>
</template>

<script>
    export default {
        name: "membercontact",

        props:{
          github:{
              type:String,
              default:''
          }
        },
        methods:{
            goGithub(){
                if(this.github){
                    window.open(this.github);
                }
            }
        }
    }
</script>

<style scoped lang="less">
  @import "../assets/css/common.less";

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
</style>
