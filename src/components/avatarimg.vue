<template>

  <div class="avatarwrap" @click="gomemberinfo">
    <div class="avatar">
      <img class="img-circle" :src="avatar_url" alt="">
    </div>
    <div class="tips">
      {{tips}}
    </div>
  </div>


</template>

<script>
    export default {
        name: "avatarimg",
        props:{
            tips:{
                type:String,
            },
            avatar_url:{
                type:String,
            }
        },
        methods:{
            gomemberinfo(){
                this.$router.push({path:'/cs/memberinfo',query:{tab:1,nickname:this.tips}});
            }
        }
    }
</script>

<style scoped lang="less">

  .avatarwrap{
    cursor: pointer;
    position: relative;
    &:hover{
      .tips{
        opacity: 1;
      }
    }
  }
  .tips{
    position: absolute;
    z-index: 99;
    left: 50%;
    bottom: -30px;
    transform: translate(-50%,0%);
    padding: 0 10px;
    line-height: 25px;
    font-size: 14px;
    background: #000;
    opacity: 0;
    color: #fff;
    white-space: nowrap;
    transition: all 0.3s;
    &:before{
       content: '';
       position: absolute;
       left: 50%;
       top: -20px;
       transform: translateX(-50%);
       border-width: 10px;
       border-color: transparent;
       border-style: solid;
       border-bottom-color: #000;
     }
  }
</style>
