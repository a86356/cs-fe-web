<template>
  <div class="containerwrap">


    <div class="container-banner-wrap">
      <div class="container container-banner">
        <div class="cnt">
          <h3>行者课堂</h3>
          <h2>5-8个月,带你零基础转行前端</h2>
          <h1>毕业后月薪5000-12000</h1>
          <div class="btn" @click="contactqq">立即咨询
            <a class="qq" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=100000356&site=qq&menu=yes"></a>
          </div>
        </div>
      </div>
    </div>


    <div class="classlist-container-wrap">
      <h1 class="big-title">面向零基础的前端课程体系</h1>
      <div class="item" v-for="(item1,index1) in classlist" :key="index1">
        <div class="title">
          {{item1.bigtitle}}
        </div>
        <div class="cnt">
          <div class="class-item" v-for="(item2,index2) in item1.children" :key="index2">
            {{item2.title}}
          </div>
        </div>
      </div>
    </div>

    <div class="qa">

      <div class="qa-wrap">
        <h1>常见问题</h1>


        <div class="item">
          <div class="a">
            什么样的人适合学习本套课程?
          </div>
          <div class="q">
            <ul>
              <li>
                适合0基础转行的同学
                <div>
                  零基础学习一门新的知识,必然会需要不懂,难以理解的地方,只要你愿意付出时间和精力,并且在老师的帮助下,找个前端工作是小事情
                </div>
              </li>
              <li>
                自学过但是基础不扎实的同学
                <div>
                  基础不扎实的同学,可以通过本套课程,扎实技术,实现升值加薪
                </div>
              </li>
              <li>
                即将毕业的大学生
                <div>
                  觉得自己所学的专业不够好，或者是在学校没有学到具体的就业知识、没有擅长的专业技能,或者喜欢前端开发的同学
                </div>
              </li>
            </ul>
          </div>
        </div>


        <div class="item">
          <div class="a">
            行者课堂与别家课程不同?
          </div>
          <div class="q">
            <ul>
              <li>性价比更高，你花钱学习课程，应该关注的是这套课程能给你带来多大的收益，我们能切实帮你完成转行和就业，如果做不到这两点，我们就没有存在的价值。</li>
              <li>覆盖面更广,虽然是前端课程,但是也会涉及到计算机基础，网络，后端，操作系统等，让你了解整个计算机行业，而不是仅限于前端。</li>
              <li>课程质量更优质，专门为零基础定制</li>
              <li>企业级实战项目，解决你没有项目经验的烦恼</li>
            </ul>
          </div>
        </div>

        <div class="item">
          <div class="a">
            我现在没有经验怎么办?
          </div>
          <div class="q">
            没有经验的确是弱势，我们要承认这点。但是我们可以通过课程中的实战项目去获得研发经验，做完我们课程的项目，就相当于获得1-2年的工作经验。你再去找工作的时候，带上自己的项目和自己平常积累的一些博客，这些都能表现出你强烈的学习意愿和学习能力，只要你平时学的足够认真，也都完成了课程中的任务，达到了企业的用人标准，企业也会录用你的。
          </div>
        </div>

        <div class="item">
          <div class="a">
            学前端有前途吗？
          </div>
          <div class="q">
            在万物互联的当今社会，有连接的地方就会需要界面，有界面的地方就需要前端，因此，岗位需求非常大，从事技术岗位经验的积累和技术的提升是与你的薪资成正比的，你技术越好，经验越丰富，拿的薪资就越高，目前来说，只要认真积累几年，月薪上万是非常正常的，如果达不到，自己就要认真反思反思了
          </div>
        </div>

        <div class="item">
          <div class="a">
            行者课堂的课程是怎么样的？
          </div>
          <div class="q">
            课程包括1000+的视频课程<br/>
            500+的配套课程<br/>
            6大企业级别的实战项目<br/>
            专业的英语辅导,让你在编程路上走的更轻松<br/>
          </div>
        </div>


        <div class="item">
          <div class="a">
            学课程和自学有什么区别？
          </div>
          <div class="q">
            学课程其实是给你可以好的学习环境，规划好你的时间和学习路线，在你遇到问题的时候，帮你解决问题。有时候，一个bug，可能你几天都搞不定，因为你没有经验，老师稍微提点你一下你就懂了。另外，老师还会带你做企业级别的项目，让你有实际开发经验。总得来说效率更高，效果更好。
          </div>
        </div>

        <div class="item">
          <div class="a">
            学费多少？
          </div>
          <div class="q">
            行者课堂作为一个刚成立不久的线上编程教育平台，课程质量一直深受好评。我们希望你过来学到的是实打实的干货，我们只关注课程的质量以及学员的学习效果，我们本套课程的收费是4880元,也可以咨询qq100000356，查询当前是否有优惠活动。当然，你也可以报我们的就业协议班，学完找不到工作，退协议规定费用，这样风险更小。
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

    export default {
        data() {
            return {

                classlist:[
                    {
                        bigtitle:"第一阶段 - html+css 入门",
                        children:[
                            {
                                title:"html,css的基础知识"
                            },
                            {
                                title:"编程开发工具"
                            },
                            {
                                title:"chrome调试方法"
                            },
                            {
                                title:"ps切图"
                            },
                            {
                                title:"html5+css3学习"
                            },
                            {
                                title:"企业站和移动端页面切图实战"
                            },
                        ]
                    },
                    {
                        bigtitle:"第二阶段 - javascript的学习",
                        children:[
                            {
                                title:"javascript基础语法"
                            },
                            {
                                title:"javascript基础语法事件"
                            },
                            {
                                title:"dom和bom"
                            },
                            {
                                title:"常见的数据结构"
                            },
                            {
                                title:"常用算法实现"
                            },
                            {
                                title:"jquery学习"
                            },
                            {
                                title:"如何调试代码"
                            }
                        ]
                    },
                    {
                        bigtitle:"第三阶段 - 前后端交互",
                        children:[
                            {
                                title:"ajax基础"
                            },
                            {
                                title:"php基础"
                            },
                            {
                                title:"网络请求模型"
                            },
                            {
                                title:"实现前后端数据交互"
                            },
                        ]
                    },
                    {
                        bigtitle:"第四阶段 - javascript进阶学习",
                        children:[
                            {
                                title:"es6入门"
                            },
                            {
                                title:"typescript入门"
                            },
                            {
                                title:"webpack入门"
                            },
                            {
                                title:"javascript编程练习题目"
                            },
                            {
                                title:"面向对象,组件化开发"
                            },
                        ]
                    },
                    {
                        bigtitle:"第五阶段 - javascript框架的学习",
                        children:[
                            {
                                title:"vue入门"
                            },
                            {
                                title:"vue全家桶"
                            },
                            {
                                title:"vue项目实战(商城)"
                            },
                        ]
                    },
                    {
                        bigtitle:"第六阶段 - 微信小程序",
                        children:[
                            {
                                title:"微信小程序入门"
                            },
                            {
                                title:"微信小程序实战"
                            },
                        ]
                    },
                    {
                        bigtitle:"第七阶段 - react",
                        children:[
                            {
                                title:"react 入门"
                            },
                            {
                                title:"react 全家桶，react-redux,react-router"
                            },
                            {
                                title:"react 项目实战"
                            },
                        ]
                    },
                    {
                        bigtitle:"第八阶段 - nodejs 后端开发",
                        children:[
                            {
                                title:"nodejs基础"
                            },
                            {
                                title:"express 框架"
                            },
                            {
                                title:"koa 框架"
                            },
                            {
                                title:"cookie和session"
                            },
                            {
                                title:"mysql数据库"
                            },
                            {
                                title:"注册和登录"
                            },
                            {
                                title:"跨域解决方案"
                            },
                            {
                                title:'restfulapi规范'
                            },
                            {
                                title:'部署项目'
                            }
                        ]
                    },
                    {
                        bigtitle:"第九阶段 - git的使用",
                        children:[
                            {
                                title:"git基础操作"
                            },
                            {
                                title:"github介绍"
                            },
                            {
                                title:"用github做代码托管"
                            },
                        ]
                    },
                    {
                        bigtitle:"第十阶段 - http网络协议",
                        children:[
                            {
                                title:"网络是什么"
                            },
                            {
                                title:"请求和相应"
                            },
                            {
                                title:"本地模拟请求和响应，后台用nodejs实现"
                            },
                            {
                                title:'3次握手，4次挥手是什么'
                            },
                            {
                                title:'总结'
                            }
                        ]
                    },
                    {
                        bigtitle:"第十一阶段 - 网站的性能优化",
                        children:[
                            {
                                title:"cdn和存储空间"
                            },
                            {
                                title:"常见的优化方法"
                            },
                            {
                                title:"浏览器原理"
                            },
                        ]
                    },
                    {
                        bigtitle:"第十二阶段 - 求职阶段",
                        children:[
                            {
                                title:"面试指导"
                            },
                            {
                                title:"模拟面试"
                            },
                            {
                                title:"简历怎么写"
                            },
                            {
                                title:"职业规划"
                            },
                            {
                                title:"入职"
                            },
                        ]
                    },
                ]

            };
        },
        created() {

        },
        methods: {
            contactqq(){
                ////shang.qq.com/wpa/qunwpa?idkey=97ae64efb0542e2e497530536a94f2e29c5f07c6eb48506aa32da38146caa08c

            }
        },
        components:{

        }
    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";
  .container-banner-wrap{
    width: 1200px;
    margin:  0 auto;
    margin-top: 5px;
    height: 400px;
    background:url("../../assets/images/classes_bg_4.jpg") no-repeat  0 0;
    background-size: cover;
    color: #fff;
    .cnt{
      text-align: center;
      margin-top: 100px;
      h1{
        font-size: 60px;
      }
      .btn{
        margin-top: 20px;
        color: #fff;
        position: relative;
        background-color:  rgba(255,0,0,.7);
        &:hover{
          background-color:  rgba(255,0,0,1);
        }
      }

      .qq{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 30px;
        z-index: 99;
      }
    }
  }
  .classlist-container-wrap{
    width: 1200px;
    margin:  0 auto;
    background: #fff;
    padding: 30px 0;
    .big-title{
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    .item{
      width: 800px;
      border: 1px solid #000;
      margin: 30px auto;
      padding: 15px;
      border-radius: 15px;
      .title{
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 5px;
        border-bottom: 2px solid #000;
      }

      .cnt{
        display: flex;
        margin-top: 15px;
        flex-wrap: wrap;
        .class-item{

          cursor: pointer;
          margin: 0 10px 10px;
          padding: 15px;
          background-color: #fff;
          border-radius: 10px;
          text-align: center;
          font-weight: 400;
          display: inline-block;
          transition: all .5s;
          box-shadow: 0 2px 2px 0 rgba(0,0,100,.1);

          &:hover{
            box-shadow: 2px 2px 2px 0 rgba(0,0,100,7);
          }
        }
      }
    }
  }


  .qa-wrap{
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    padding: 15px;
    h1{
      text-align: center;
      padding-bottom: 15px;
      border-bottom: 1px solid @color-divider;
    }

    .item{
      .a{
        font-size: 25px;
        font-weight: bold;
        line-height: 1.5;
        margin-bottom: 20px;
      }
      .q{
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    .container-banner-wrap{
      width: 100%;
      .cnt{
        margin-top: 20px;
      }
    }

    .classlist-container-wrap{
      width: 90%;
      .item{
        width: 100%;
      }
    }
    .qa-wrap{
      width: 100%;
    }
  }

</style>
