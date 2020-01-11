<template>
  <div class="tips">
    {{tips}}
  </div>
</template>

<script>
    export default {
        name: "tips",
        props:{
            tips:{
                type:String,
                default:''
            }
        },
    }
</script>

<style scoped lang="less">
  .tips{
    position: absolute;
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
    transition: all 0.1s;
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
