<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 left-box">
            <div class="imgwrap" >
              <img class="img-circle" style="width: 100px;height: 100px"  :src="data1.avatar_url" alt="">
            </div>
            <div class="username">
              {{data1.nickname}} {{data1.company?' @ '+data1.company:''}}
            </div>

            <div class="contactwrap">
              <membercontact :github="data1.github"></membercontact>
            </div>

            <div class="other">
              <div class="one">
                <div class="k">
                  注册时间
                </div>
                <div class="v">{{data1.create_time | cntime}}</div>
              </div>
              <div class="one">
                <div class="k">
                  最后一次登录时间
                </div>
                <div class="v">{{data1.last_login| cntime}}</div>
              </div>

              <div class="one" :class="data1.expired_time>now?'':'hide'">
                <div class="k">
                  会员到期时间
                </div>
                <div class="v" style="color: red">{{data1.expired_time| cntime}}</div>
              </div>
            </div>
        </div>
        <div class="col-lg-8 right-box">
          <ul class="nav nav-tabs">
            <li @click="gomemberinfo(1)" :class="tab=='1'?'active':''" ><a href="#">视频观看历史</a></li>
            <li @click="gomemberinfo(2)" :class="tab=='2'?'active':''"   ><a href="#">学习的课程</a></li>
            <li @click="gomemberinfo(3)" :class="tab=='3'?'active':''"  ><a href="#">收藏的课程</a></li>
            <li @click="gomemberinfo(4)" :class="tab=='4'?'active':''"  ><a href="#">收藏的帖子</a></li>
            <li @click="gomemberinfo(5)" :class="tab=='5'?'active':''"  ><a href="#">发布的帖子</a></li>
            <li @click="gomemberinfo(6)" :class="tab=='6'?'active':''"  ><a href="#">回复的帖子</a></li>
            <li @click="gomemberinfo(7)" :class="tab=='7'?'active':''"  ><a href="#">签到记录</a></li>
          </ul>
          <div class="right-content">
            <div class="history p30" :class="tab=='1'?'':'hide'">
              <div class="item-one" v-for="(item,index) in history.list" :key="index" @click="goVideo(item.class_id,item.seg_id)">
                  <div class="tit">{{item.seg_name}} |  学习进度:{{parseInt(item.now_time)/parseInt(item.total_time) | keeptwo}}%</div>
              </div>
              <pagination :count="history.count" pagename="history" v-if="history.count>0" @setpage="setpage" ></pagination>
            </div>

            <div class="studyclass p30" :class="tab=='2'?'':'hide'">
              <div class="item-one-img" v-for="(item,index) in studyclass.list" :key="index" @click="goVideo(item.class_id,-1)">
                <div class="img">
                  <img :src="item.pic_url" :alt="item.class_name">
                </div>
                <div class="tit">{{item.class_name}}</div>
              </div>
              <pagination :count="studyclass.count" pagename="studyclass" v-if="studyclass.count>0" @setpage="setpage" ></pagination>
            </div>

            <div class="colletclass p30" :class="tab=='3'?'':'hide'">

              <div class="item-one" v-for="(item,index) in collectionvideo.list" :key="index" @click="goVideo(item.sub_id,-1)">
                <div class="tit">{{item.title}} </div>
              </div>
              <pagination :count="collectionvideo.count" pagename="collectionvideo" v-if="collectionvideo.count>0" @setpage="setpage" ></pagination>
            </div>


            <div class="colletarticle p30" :class="tab=='4'?'':'hide'">
              <div class="item-one" v-for="(item,index) in collectionarticle.list" :key="index" @click="goArticleDetail(item.sub_id)">
                <div class="tit">{{item.title}} </div>
              </div>
              <pagination :count="collectionarticle.count" pagename="collectionarticle" v-if="collectionarticle.count>0" @setpage="setpage" ></pagination>
            </div>

            <div class="pubarticle p30" :class="tab=='5'?'':'hide'">

              <div class="item-one" v-for="(item,index) in pubarticle.list" :key="index" @click="goArticleDetail(item.id)">
                <div class="tit">{{item.title}} </div>
              </div>

              <pagination :count="pubarticle.count" pagename="pubarticle" v-if="pubarticle.count>0" @setpage="setpage" ></pagination>
            </div>

            <div class="reply p30" :class="tab=='6'?'':'hide'">

              <div class="replylist" v-for="(item,index) in replylist.list" :key="index" @click="goArticleDetail(item.main_id)">

                <div class="quote">
                  <div>
                    {{item.title}}
                  </div>
                  <div class="info">
                    #{{item.quote_floor}} @ {{item.quote_nickname}}
                  </div>
                  <div class="quote_cnt">
                    {{item.quote_cnt}}
                  </div>

                </div>
                <div class="reply">
                   回复: {{item.pub_cnt}}
                </div>
              </div>
              <pagination :count="replylist.count" pagename="replylist" v-if="replylist.count>0" @setpage="setpage"></pagination>

            </div>


            <div class="checkinlog p30" :class="tab=='7'?'':'hide'">
<!--              <div class="btnwrap" style="margin-bottom: 10px;" @click="goCheckIn">-->
<!--                <button data-v-b4990e74="" type="button" class="btn btn-primary trans">点我签到</button>-->
<!--              </div>-->
              <table class="table table-bordered table-striped table-hover table-responsive">
                <thead>
                <tr>
                  <th>会员</th>
                  <th>今日签到时间</th>
                  <th>总签到天数</th>
                  <th>签到内容</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in checkin.list" :key="index">
                  <td >
                    <img style="width: 45px;height: 45px;" class="img-circle" :src="item.avatar_url" alt="">
                    {{item.nickname}}
                  </td>
                  <td >
                    {{item.create_time | cntime}}
                  </td>
                  <td>
                    {{item.totalnum}}
                  </td>
                  <td>
                    {{item.cnt}}
                  </td>
                </tr>
                </tbody>
              </table>
              <pagination :count="checkin.count" v-if="checkin.count>0" pagename="checkin"  @setpage="setpage" ></pagination>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import loveandcomment from "../../components/common/loveandcomment";
    import record from "../../components/member/record";
    import membercontact from "../../components/membercontact";
    import pagination from "../../components/pagination";
    export default {
        name: "info",
        components:{
            loveandcomment,
            record,
            membercontact,
            pagination
        },
        data(){
          return {
              now:0,
              tab:1,
              tabName:'memberinfotab',
              nickname:'',
              history:{page:1, list:[], count:0,tab:1,service:"segment.getprogresslist"},
              studyclass:{page:1, list:[], count:0,tab:2,service:"member.getstudyclasses"},
              collectionvideo:{page:1, list:[], count:0,type:2,tab:3,service:"collect.getcollectionlist"},
              collectionarticle:{page:1, list:[], count:0,type:1,tab:4,service:"collect.getcollectionlist"},
              pubarticle:{page:1, list:[], count:0,tab:5,service:"collect.getcollectionlist"},
              replylist:{page:1, list:[], count:0,tab:6,service:"comment.getreplylist"},
              checkin:{page:1, list:[], count:0,tab:7,service:"member.getcheckinlist"},
          }
        },
        mounted(){
            this.now=Math.ceil(new Date().getTime()/1000)

            let {tab,nickname} =  this.$route.query
            this.tab = tab;
            this.nickname = nickname;
            this.getUerinfo();
            this.changetab(tab)
        },
        watch:{
            "$route":function () {
                let {tab} =  this.$route.query
                this.tab = tab;
                this.changetab(tab)
            }
        },
        methods:{
            getUerinfo(){
                this.$api({
                    service:"member.getuserinfo",
                    type:"2",
                    value:this.nickname
                }).then(res=>{
                    this.data1=res;
                })
            },

            getmylist(service,dataname){

                let obj={
                    service:service,
                    page:this[dataname].page,
                    nickname:this.nickname
                };
                if(!dataname['type']){
                    obj.type = this[dataname]['type']
                }

                this.$api(obj).then(res=>{
                    let {list,count} =res;
                    this[dataname].list =list;
                    this[dataname].count =count;

                })
            },
            gomemberinfo(tab){
                this.$router.push({path:'/cs/memberinfo',query:{tab:tab}});
            },
            changetab(tab){

                this.tab=tab;
                switch (parseInt(tab)) {
                    case 1:

                        this.getmylist('segment.getprogresslist','history')
                        break;
                    case 2:
                        this.getmylist('member.getstudyclasses','studyclass')
                        break;
                    case 3:
                        this.getmylist('collect.getcollectionlist','collectionvideo')
                        break;
                    case 4:
                        this.getmylist('collect.getcollectionlist','collectionarticle')
                        break;
                    case 5:
                        this.getmylist('article.getlist','pubarticle')
                        break;
                    case 6:
                        this.getmylist('comment.getreplylist','replylist')
                        break;
                    case 7:
                        this.getmylist('member.getcheckinlist','checkin')
                        break;

                }


            },
            setpage(params){

              let {page,pagename} =params;
              if(this[pagename]['page']==page)return;

              this[pagename]['page']=page;

              this['get'+pagename]();

            }
        }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";


  .left-box{
    background: #fff;
    padding: 20px;
    .imgwrap{
      text-align: center;
    }
    .contactwrap{
      margin-bottom: 10px;
      text-align: center;
    }

    .username{
      line-height: 40px;
      text-align: center;
      padding-bottom: 10px;
      border-bottom: 1px solid @border;
      margin-bottom: 10px;
    }
    .one{
      display: flex;
      line-height: 30px;
      .k{
        color: @subtitle;
        margin-right: 10px;
        width:140px;
      }
      .v{
        color: @title;
      }
    }

  }

  .right-box{
    .nav-tabs{
      background: #fff;
    }
    .right-content{
      background: #fff;
    }
    .history{
      padding:30px;
      .item{
        display: flex;
        padding: 15px;

        .l{
          margin-top: 5px;
          img{
            max-width: 60px;
            max-height: 30px;
          }
        }

        .r{
          margin-left: 15px;
          line-height: 25px;
        }
      }
    }
  }
  .item-one-img{
    padding-bottom: 10px;
    border-bottom: 1px solid @border;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    .img{
      width: 200px;
      img{
        width: 100%;
      }
    }
    .tit{
      margin-left: 20px;
      display: flex;
      align-items: center;
      &:hover{
        text-decoration: underline;
        color: @subColor;
      }
    }
  }

  .replylist{
    padding-bottom: 10px;
    border-bottom: 1px solid @border;
    margin-bottom: 10px;

    .quote{
      border: 1px solid @border;
      border-radius: 5px;
      padding: 10px;
      width: 100%;
      background: #f5f5f5;
      .quote_cnt{
        .onelineellops;
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }

    }
    .reply{
      margin-top: 10px;
      line-height: 25px;
      background: #f5f5f5;
      border: 1px solid @border;
      border-radius: 5px;
      padding: 10px;
      color: @red;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }

  .item-one{
    padding-bottom: 10px;
    border-bottom: 1px solid @border;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;

    &:hover{
      text-decoration: underline;
      color: @subColor;
    }
  }
</style>
