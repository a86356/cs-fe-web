<template>
  <div class="container">



    <div class="container">


      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
          <div class="row ">


            <div class="videowrap myvideo">
              <div :class="videotype=='cdn'?'':'hide'">
                <div id="dplayer"></div>
              </div>
              <div :class="videotype=='b'?'':'hide'">
                <div v-html="videourl"></div>
              </div>


            </div>
            <div class="prevnext">

              <div>
                <button class="btn btn-success" :class="seg_item.sort=='1'?'hide':''" @click="goPrevone"> 上一集</button>
              </div>
              <div>{{seg_item.seg_name}}</div>
              <div>
                <button class="btn btn-success" :class="seg_item.sort==last_seg_sort?'hide':''" @click="goNextone"> 下一集</button>
              </div>
            </div>
            <div class="introduction">
              <div class='tipwrap'>
                <div class="love">
                  <button class="btn btn-default" @click="toggleCollection"><i class="iconfont icon" :class="isCollected?'active':''" >&#xe663;</i><span>收藏 | {{this.classdetail.lovenum}}</span></button>
                </div>
              </div>

              <publishcontent :value="classdetail.introduction_md"></publishcontent>
            </div>

            <commentitem type="2" :id="this.class_id" v-if="class_id>0" @setquote="setquote" ref="commentitem"></commentitem>

            <quoteitem @clearquote="clearquote" :item="quote_item"></quoteitem>

            <div class="bottom">

              <div class="edit">
                <mdeditor @change="changemd" ref="mdeditor"></mdeditor>
              </div>
              <div class="btnwrap">
                <button class="btn btn-primary" @click="publish">发布评论</button>
              </div>
            </div>


          </div>


        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 right">

          <div class="right-box">

            <div class="panel panel-default">
              <div class="panel-heading">
                <i class="iconfont">&#xe62b;</i>
                <span >视频列表</span>
              </div>
              <div class="panel-body panelbd">
                <div class="item hover-main" v-for="(item,index) in allseglist" :key="index" @click="selectSegone(item.seg_id)">
                  <div class="leading">

                    <span :class="item.seg_id==seg_id?'hide':''">{{item.sort}}</span>
                    <span :class="item.seg_id==seg_id?'':'hide'"><i class="iconfont">&#xe62b;</i></span>

                  </div>
                  <div class="free icon" :class="item.isvip==1?'free':'vip'">
                    {{item.isvip=='1'?'free':'vip'}}
                  </div>
                  <div class="tit">

                    <div class="top" :class="item.seg_id==seg_id?'playing':''">
                      {{item.seg_name}}
                    </div>
                    <div class="duration" :class="item.seg_id==seg_id?'playing':''">
                      ({{item.duration}})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-box">

            <div class="panel panel-default">
              <div class="panel-heading">
                <i class="iconfont">&#xe615;</i>
                <span>学习成员</span>
              </div>
              <div class="panel-body panel-studymember">
                <div class="item" v-for="(item,index) in studyMemberList" :key="index">
                  <avatarimg :avatar_url="item.avatar_url" :tips="item.nickname"></avatarimg>
                </div>

              </div>
            </div>

          </div>
<!--          <div class="right-box">-->

<!--            <div class="panel panel-default">-->
<!--              <div class="panel-heading">-->
<!--                <i class="iconfont">&#xe67f;</i>-->
<!--                <span >学习进度</span>-->
<!--              </div>-->
<!--              <div class="panel-body panel-progress">-->
<!--                <div class="item">-->
<!--                  <div class="avatarwrap">-->
<!--                    <img class="img-circle" src="https://houdunren-image.oss-cn-qingdao.aliyuncs.com/119771558968238.gif" alt="">-->
<!--                  </div>-->
<!--                  <div class="r">-->
<!--                    <div class="r-tit" style="line-height: 45px">2小时前，学习了 5:20</div>-->
<!--                    <div class="b">-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import videolist from "../../components/videolist";
    import loveandcomment from "../../components/common/loveandcomment";

    import 'dplayer/dist/DPlayer.min.css';
    import DPlayer from 'dplayer';

    import commentitem from "../../components/comment/commentitem";
    import quoteitem from "../../components/comment/quoteitem";
    import mdeditor from "../../components/mdeditor";
    import publishcontent from "../../components/publishcontent";
    import pagination from "../../components/pagination";
    import avatarimg from "../../components/avatarimg";

    export default {
        data(){
            return {
                allseglist:[],
                videourl:'',
                videotype:"",
                logo:'http://img.cs1024.com/images/cetteach1024.png',
                poster:'',
                seg_id:-1,
                seg_item:{},
                last_seg_sort:'-1',
                class_id:'',
                studyMemberList:[],
                studyMemberCount:0,
                classCommmentList:[],
                classCommmentCount:0,
                content:'',
                quote_item:{},
                quote_id:-1,
                classdetail:{},
                isCollected:false

            }
        },
        components:{
            videolist,
            loveandcomment,
            commentitem,
            quoteitem,
            mdeditor,
            publishcontent,
            pagination,
            avatarimg
        },
        mounted() {

          let {class_id,seg_id} =  this.$route.query
          this.class_id=class_id;
          this.seg_id=seg_id;

          this.loadAllSeg();
          this.studyClass();
          this.getAllStudyMember();
          this.getClassDetail();
          this.getCollection();
          this.initDp();
        },
        methods:{
            getClassDetail(){
                this.$api({
                    service:"classes.getclassdetail",
                    class_id:this.class_id,
                }).then(res=>{
                    this.classdetail = res;
                })

            },
            getCollection(){
                this.$api({
                    service:"collect.getonecollection",
                    sub_id:this.class_id,
                    type:"2"
                }).then(res=>{
                    let {id}  =res;
                    if(id==0){
                        this.isCollected=false
                    }else{
                        this.isCollected=true
                    }
                })
            },

            toggleCollection(){

                this.checkLogin();

                if(this.isCollected){
                    this.$api({
                        service:"collect.cancelcollection",
                        sub_id:this.class_id,
                        type:"2"
                    }).then(res=>{
                        this.isCollected=false

                        this.getClassDetail();

                    })
                }else{
                    this.$api({
                        service:"collect.addcollection",
                        sub_id:this.class_id,
                        type:"2"
                    }).then(res=>{
                        this.isCollected=true
                        this.getClassDetail();

                    })
                }
            },
            goPrevone(){
                for (let i=0;i<this.allseglist.length;i++){
                    if(this.seg_item.sort==this.allseglist[i].sort){
                        this.selectSegone(this.allseglist[i-1].seg_id);
                    }
                }
            },
            goNextone(){

                var index =-1;
                let all = this.allseglist;
                for (let i=0;i<all.length;i++){
                    if(all[i].sort==this.seg_item.sort){
                        index=i
                    }
                }

                if(index==-1)return;

                this.selectSegone(all[index+1].seg_id);
            },
            publish(){

                if(this.content==''){
                    this.showmsg('info','未填写内容');
                    return;
                }
                if(this.content.length<3){
                    this.showmsg('info','评论内容不少于3个字');
                    return;
                }
                this.checkLogin();

                this.$api({
                    service:"comment.publish",
                    main_id:this.class_id,
                    cnt:this.content,
                    quote_id:this.quote_id,
                    type:2,
                }).then(res=>{
                    this.showmsg('success','发布成功');
                    this.goTopNow();
                    this.$refs.mdeditor.clear();
                    this.$refs.commentitem.getCommentList();
                    this.clearquote();
                })

            },
            initDp(){
                const dp = new DPlayer({
                    container: document.getElementById('dplayer'),
                    screenshot: true,
                    video: {
                        url: this.videourl,
                        type: 'hls',
                        pic:this.poster
                    },
                    subtitle: {
                        url: 'webvtt.vtt',
                    },
                    hotkey: false,
                    lang:'zh-cn',
                    logo:this.logo
                });
                let that =this;

                dp.on('loadstart',function () {
                    if(that.isLogined()){

                        that.$api({
                            service:"segment.getoneprogress",
                            class_id:that.class_id,
                            seg_id:that.seg_id,

                        }).then(res=>{
                            let { ok,data} =res;
                            if(ok=='1'){
                                dp.seek(data.now_time);
                            }
                        })
                    }

                })
                dp.on('progress',function (res) {
                    let currentTime=  dp.video.currentTime;
                    let totalTime =  dp.video.duration;
                    let seg_name = that.seg_item.seg_name

                    if(that.isLogined()){
                        that.$api({
                            service:"segment.update",
                            class_id:that.class_id,
                            seg_id:that.seg_id,
                            seg_name:seg_name,
                            current_time:currentTime,
                            total_time:totalTime
                        }).then(res=>{

                        })
                    }



                })
                dp.on('ended',function () {

                })
                this.inithotkey(dp)
            },
            inithotkey(player){
                document.addEventListener('keydown', function (e) {
                    if (player.focus) {
                        var tag = document.activeElement.tagName.toUpperCase();
                        var editable = document.activeElement.getAttribute('contenteditable');
                        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
                            var event = e || window.event;
                            var percentage = void 0;
                            switch (event.keyCode) {
                                case 32:
                                    event.preventDefault();
                                    break;
                                case 37:
                                    event.preventDefault();
                                    player.seek(player.video.currentTime - 5);
                                    player.controller.setAutoHide();
                                    break;
                                case 39:
                                    event.preventDefault();
                                    player.seek(player.video.currentTime + 5);
                                    player.controller.setAutoHide();
                                    break;
                                case 38:
                                    event.preventDefault();
                                    percentage = player.volume() + 0.1;
                                    player.volume(percentage);
                                    break;
                                case 40:
                                    event.preventDefault();
                                    percentage = player.volume() - 0.1;
                                    player.volume(percentage);
                                    break;
                            }
                        }
                    }
                });
            },
            selectSegone(seg_id){
                this.seg_id = seg_id;

                this.setSegItem();

                this.loadOneSeg();
            },
            studyClass(){
                this.$api({
                    service:"videos.studyclass",
                    class_id:this.class_id
                }).then(res=>{
                })
            },
            getAllStudyMember(){

                this.$api({
                    service:"videos.getallstudymember",
                    class_id:this.class_id
                }).then(res=>{
                    this.studyMemberList = res.list;
                    this.studyMemberCount = res.count;
                })

            },
            loadAllSeg(){

                this.$api({
                    service:"videos.getallseg",
                    class_id:this.class_id
                }).then(res=>{
                    this.allseglist = res.list;

                    this.last_seg_sort = this.allseglist[this.allseglist.length-1].sort;

                    if(this.seg_id==-1){
                        this.seg_id = res.list[0].seg_id;
                    }
                    this.setSegItem();


                    this.loadOneSeg();

                })

            },
            setSegItem(){
                for (let i=0;i<this.allseglist.length;i++){
                    if(this.seg_id==this.allseglist[i].seg_id){
                        this.seg_item = this.allseglist[i];
                        this.goVideo(this.class_id,this.seg_id)
                    }
                }
            },
            loadOneSeg(){
                if(this.seg_id==-1)return;

                this.$api({
                    service:"videos.getoneseg",
                    seg_id:this.seg_id
                }).then(res=>{
                  let {ok,type,url} =res;
                  if(ok=='-1'){
                      this.goSubscribe()
                  }

                  if(url.indexOf('mp4')>=0){
                      return;
                  }

                  this.videotype = type
                  this.videourl  = url;
                  if(type=='cdn'){

                     this.initDp();
                  }

                })

            }
        }


    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";


  .btnwrap{
    background: #fff;
    padding: 10px;
  }
  .myvideo iframe{
    width: 100%!important;
  }

  #dplayer{
    .dplayer-logo{
      background: red;

    }
  }
  .dplayer-logo{
    max-width: 100px!important;
    max-height: 100px!important;
    right: 0!important;
    bottom: 0!important;
  }

  @media (min-width: 320px){
    .myvideo{
      width: 100%;
      height: 180px;
    }
  }

  @media (min-width: 768px){
    .myvideo{
      width: 100%;
      height: 210px;
    }
  }
  @media (min-width: 992px){
    .myvideo{
      width: 100%;
      height: 362px;
    }
  }
  @media (min-width: 1200px){
    .myvideo{
      width: 100%;
      height: 438px;
    }
  }
  .myvideo{
    width: 100%;
    border: none!important;
  }
  .panel-studymember{
    display: flex;
    .item{
      margin: 0 5px;
      cursor: pointer;
    }
  }
  .left{
    background: #fff;
  }
  .videowrap{
    background: #fff;
  }
  .prevnext{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background: #fff;
    .shadow-sm;
  }
  .panel-progress{
    .item{
      display: flex;
      padding-bottom: 10px;
      border-bottom: 1px solid @border;
      margin-bottom: 10px;
      .r{
        margin-left: 15px;
        line-height: 25px;
        overflow: hidden;
        height: 50px;
        .twolineellips;
      }
    }
  }
  .introduction{
    text-align: center;
    border-bottom: 1px solid @border;
    img{
      width: 80px;
      height: 80px;
      padding: 5px;

    }
    .name{
      line-height: 40px;
    }
  }

  .contact{
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    &:hover{
      color: @subColor;
    }
  }
  .panelbd{
    height: 300px;
    overflow: auto;

    .item{
      padding: 10px;
      display: flex;
      .leading{
        margin-right: 10px;
      }
      .icon{
        width: 35px;
        height: 25px;
        line-height: 25px;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        margin-right: 5px;
      }
      .free{
        background: @green;
      }
      .vip{
        background: @red;
      }
      .tit{
        line-height: 25px;
      }
    }
  }


  .comnu{
    margin-top: 50px;
    .left{
      .shadow-sm;
      .top{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid @border;
        margin-bottom: 10px;
        line-height: 40px;
        .tit{
        }
        .pub{
        }
      }

    }
    .content{
      .box-item{
        display: flex;
        padding-bottom: 10px;
        border-bottom: 1px solid @border;
        margin-bottom: 10px;
        .avatarwrap{
          margin-right: 15px;
        }
        .tit{
          line-height: 30px;
          color: @title;
        }
        .bottom{
          display: flex;
          line-height: 25px;
          .time{
            margin-left: 10px;
            color: @subtitle;
          }
          .type{
            color: #fff;
            background: @mainColor;
            font-size: 12px;
            padding: 0 8px;
            border-radius: 8px;
          }
        }
      }
    }
    .right{
      .right-box{
        background: #fff;
        margin-bottom: 15px;
        .shadow-sm;
        .tit{
          font-size: 14px;
          line-height: 50px;
          margin-bottom: 10px;
          padding-left: 15px;
          border-bottom: 1px solid @border;
        }
        .item{
          display: flex;
          padding: 10px ;
          border-bottom: 1px solid @border;
          .avatarwrap{
            margin-right: 10px;
          }
          .r{
            .r-tit{
              line-height: 30px;
              color: @title;
              overflow: hidden;
              width: 100%;
            }
            .b{
              display: flex;
              color: @subtitle;
              line-height: 25px;
              .name{
                margin-right: 10px;
              }
            }
          }

        }
      }

    }
  }
  .playing{
    color: @green;
    font-weight: bold;
  }

  .introduction{
    .shadow-sm;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 20px;
    background: #fff;
  }
  .tipwrap{
    line-height: 30px;
    background: #fff;
    text-align: right;
    padding-top: 5px;
    padding-bottom: 5px;
    .love{
      cursor: pointer;

    }
  }
  .active{
    color: @red;
  }
</style>
