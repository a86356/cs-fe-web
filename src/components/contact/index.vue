<template>
  <div>


    <div class="contactqq">
      <a href="tencent://Message/?Uin=100000356&amp;websiteName=local.edu.com:8888=&amp;Menu=yes" class="btn btn-qq">
        <img border="0" src="http://pub.idqqimg.com/wpa/images/counseling_style_53.png" alt="hello xym!!" title="hello xym!!"/>
      </a>
    </div>


  </div>
</template>

<script>

    export default {
        name: "Login",
        data() {
            return {
            };
        },
        created() {

        },
        methods: {

        }
    };
</script>

<style lang="less">

  @import "../../assets/css/common.less";

  .contactqq{
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 9999;
  }

</style>
