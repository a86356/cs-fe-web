<template>
  <div style="position: relative" >
      <Navbar></Navbar>


      <router-view />
      <MyFooter></MyFooter>

    <goTop></goTop>

  </div>
</template>

<script>


    import Navbar from '../../components/navbarIndex'
    import MyFooter from '../../components/footer/index'

    import goTop from "../../components/goTop";
    export default {
      components:{
          Navbar,
          MyFooter,
          goTop
      }
    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";



</style>
