<template>
  <div class="containerwrap">
    <div class="container">
      <div class="col-md-4 left-box" >
        <h2 class="title">前端工程师</h2>
        <h6 class="subtitle">
          行者课堂的前端知识体系庞大,包含12大模块的专业训练,任何无编程经验的人都可以轻松学会。
          适合有志从事于前端开发的在校学生,转专业的朋友,我们有专业的老师为你解答编程中遇到
          的问题,让你快速提升开发水平
        </h6>
        <div class="contactinfo" style="margin-bottom: 20px">
          <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=100000356&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:100000356:51" alt="行者课堂" title="行者课堂"/></a>
          <span>咨询课程</span>
          <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=97ae64efb0542e2e497530536a94f2e29c5f07c6eb48506aa32da38146caa08c"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="零基础行者前端" title="零基础行者前端"></a>
          <span style="margin-left: 5px;">加入qq交流群</span>
        </div>
      </div>

      <div class="col-md-8">
        <div class="right-box">
          <div class="item one">
            <h1>第一阶段</h1>
            <p>学习html,css,javascript基础和开发工具的使用</p>
          </div>
          <div class="item two">
            <h1>第二阶段</h1>
            <p>前端进阶,深入理解各个知识点</p>
          </div>

          <div class="item three">
            <h1>第三阶段</h1>
            <p>框架学习,学习vue,react,小程序等流行框架</p>
          </div>

          <div class="item four">
            <h1>第四阶段</h1>
            <p>项目实战,模拟真实的企业级开发的项目</p>
          </div>

          <div class="item five">
            <h1>第五阶段</h1>
            <p>面试指导,简历制作</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {

    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";

  .containerwrap{
    min-width: 1200px;
    height: calc(100vh - 110px);
    min-height: 580px;
    padding-top: 180px;
    background:url("../../assets/images/home_bg.png") no-repeat  0 0;
    background-size: cover;

  }
  .left-box{
    color: #fff;

  .title{
    font-size: 50px;
    margin-bottom: 20px;
  }
  .subtitle{
    font-size: 16px;
    line-height: 1.5;
  }
  }


  .right-box{
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
  .item:hover{
    animation: heart 0.5s ;
  }
  .item{
    padding: 10px;
    width: 220px;
    height: 150px;
    color: #fff;
    text-align: center;

    margin:  0 0 15px 15px;

  h1{
    text-align: center;
    font-size: 30px;
  }

  p{
    font-size: 18px;
  }
  }
  .one{
    background: @success-color;

  }
  /*.one：hover{*/
  /*  //animation: heart 0.5s infinite;*/
  /*  background: pink!important;*/
  /*}*/
  .two{

    background: @primary-color-light;
  }
  .three{
    background: @error-color;
  }
  .four{
    background: @info-color;
  }
  .five{
    background: @warning-color;
  }
  h1{

  }
  }

  @keyframes heart {
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(1.1);
    }
    100%{
      transform: scale(1);
    }
  }

  @media (max-width: 1024px) {
    .containerwrap{
      width: 100%;
      min-width: 100%;
      height: auto;
      padding-top: 50px;
    }

    .right-box .item{
      width: 100%;
      margin-left: 0;
    }
  }
</style>
