<template>
  <div class="container">

      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-6 left">
          <div class="body">
            <h5 class="maintitle">最新视频</h5>

            <div class="input-group" style="margin-bottom: 20px;">
              <input type="text" class="form-control" @input="searchseg" v-model="searchcontent" placeholder="请输入查询的内容">
              <div class="input-group-append">
                <button  class="btn btn-default" @click="searchseg">搜索</button>
              </div>
            </div>
            <div class="listwrap">
              <div class="item" v-for="(item,index) in list" :key="index" @click="goVideo(item.class_id,item.seg_id)">

                <div class="l" style="display: flex">
                  <div class="videotype" :class="item.isvip=='1'?'free':'hide'">免费</div>
                  <div class="videotype" :class="item.isvip=='2'?'vip':'hide'">付费</div>
                  <div class="info">
                    {{item.seg_name}} | 时长 ({{item.duration}})
                  </div>
                </div>
                <div class="r">
                  <i class="iconfont">&#xe606;</i>
                  {{item.create_time | cntime_ymd}} >></div>
              </div>
            </div>
            <div class="more">
              <pagination :count="count" v-if="count>0" @setpage="setpage"></pagination>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-6 right">
          <div class="">
            <classtips></classtips>
          </div>
          <div class="right-box">
            <div class="panel panel-default">
              <div class="panel-heading">
                <i class="iconfont">&#xe62e;</i>
                <span>最热视频</span>
              </div>
              <div class="panel-body">
                <div class="item" v-for="(item,index) in hostclasslist" :key="index" @click="goVideo(item.id,-1)">
                  <div class="r" >
                    <div class="icon">
                      <i class="iconfont">&#xe607;</i>
                    </div>
                    <div class="r-tit">{{item.classesname}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



  </div>
</template>

<script>
    import videolist from "../../components/videolist";
    import pagination from "../../components/pagination";
    import classtips from "../../components/classtips";
    export default {
        components:{
            videolist,
            pagination,
            classtips
        },
        data(){
          return{
              list:[],
              hostclasslist:[],
              count:0,
              page:1,
              searchcontent:''
          }
        },
        mounted() {
            this.loadlist();
            this.gethotclass();
        },
        methods:{
            loadlist(){

                this.$api({
                    service:"segment.getseglist",
                    page:this.page,
                    searchcontent: this.searchcontent
                }).then(res=>{
                    let {count,list} = res;
                    this.list=list;
                    this.count=count;
                })
            },
            searchseg(){
                this.page=1;
                this.loadlist();
            },
            setpage(param){
                let {page} = param;
                if(page==this.page)return;

                this.page=page;
                this.loadlist();
            },
            gethotclass(){

                this.$api({
                    service: "classes.gethotclass"
                }).then(res=>{
                    let {list} =res;
                    this.hostclasslist = list;
                })
            }
        }

    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";

  .body {
    background: #fff;
    padding: 20px;
    margin-bottom: 10px;
    .shadow-sm;
    .maintitle {
      line-height: 30px;
      text-align: center;
      border-bottom: 1px solid @border;
      margin-bottom: 30px;
      font-size: 14px;
    }
  }

  .listwrap{
    .item{
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      font-size: 14px;
      color: @title;
      cursor: pointer;
      border-bottom: 1px solid @border;
      .l:hover{
        color: @mainColor;
        text-decoration: underline;
      }
      .l{
        .videotype{
          margin-right: 15px;
          padding: 0 7px;

          color: #fff;
          line-height: 24px;
          border-radius: 5px;
        }
        .vip{
          background: @red;
        }
        .free{
          background: @green;
        }
      }
    }
  }
  .right-box{
    .item{
      cursor: pointer;
      &:hover{
        color: @red;
        text-decoration: underline;
      }
      .r{
        display: flex;
        padding: 4px 0;
        margin-bottom: 10px;
        border-bottom: 1px solid @border;
      }
      .icon{
        margin-right: 8px;
        color: @red;
      }
    }
  }
</style>
