<template>
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6" v-for="(item,index) in list" :key="index">
      <div class="item" @click="govideodetail(item)">
        <div class="imgwrap">
          <img class="img-responsive" :src="item.pic" :alt="item.classesname">
          <tips :tips="item.classesname"></tips>
        </div>
        <div class="title">
          {{item.classesname}}
        </div>
        <div class="status">
          <div class="left">

            <div class="pricetag" :class="item.viptype=='1'?'free':'vip'">
              {{item.viptype=='1'?'免费':'付费'}}
            </div>
            <div>

            </div>
          </div>
          <div class="left">{{item.total_time==''?'':item.total_time}}</div>
        </div>
        <div class="publishtime">
           <div class="l">{{item.create_time| beforedateline}}之前 - </div>
           <div class="r">
             <div class="tag" :class="item.status=='1'?'no':'hide'">未更新</div>
             <div class="tag" :class="item.status=='2'?'in':'hide'">更新中</div>
             <div class="tag" :class="item.status=='3'?'end':'hide'">已完结</div>
           </div>
        </div>
        <loveandcomment :commentnum="item.commentnum" :lovenum="item.lovenum"></loveandcomment>
      </div>
    </div>

  </div>
</template>

<script>

    import loveandcomment from "./common/loveandcomment";
    import tips from "./common/tips";
    export default {
        name: "videolist",
        components:{
            loveandcomment,
            tips
        },
        props:{
            list:{
                type:Array,
                default:()=>{return []}
            }
        },
        mounted() {
        },
        methods:{
            govideodetail(item){
                this.goVideo(item.id)
            }
        }
    }
</script>

<style scoped lang="less">

  @import "../assets/css/common.less";

  .row{

    .item{
        margin-bottom: 20px;
        cursor: pointer;
        border: 1px solid @border;
        .pricetag{
          color: #fff;
          padding: 0 10px;
          font-size: 14px!important;
          border-radius: 4px;
        }
        .free{
          background: @green;
        }
        .vip{
          background: @red;
        }

        .imgwrap{

          position: relative;
          &:hover{
            .tips{
              opacity: 0.9;
            }
          }

        }
        &:hover{
           border-color: @mainColor;
         }
        &:hover{
           background: @bg-hover;
         }
        .title{
          color: @title;
          padding: 10px;
          .onelineellops;
        }
        .status{
          display: flex;
          padding: 0 10px;
          color: @subtitle;
        }
        .publishtime{
          color: @subtitle;
          padding: 0 10px;
          line-height: 30px;
          display: flex;
          .r{
            .tag{
              font-size: 12px;
              height: 25px;
              line-height: 25px;
              margin-left: 5px;
              padding: 0 8px;
              margin-top: 2px;
              color: #fff;
              border-radius: 5px;
            }
            .no{
              background: @gray;
            }
            .in{
              background: @info;
            }
            .end{
              background: @teal;
            }
          }
        }
        .loveandcomment{
          display: flex;
          padding-left: 10px;
          padding-bottom: 10px;
          margin-top: 5px;
          .love,.comment{
              background: @subColor;
              color: #fff;
              padding-right: 5px;
              margin-right: 5px;
              overflow: hidden;
              border-radius: 5px;
          }
          .iconfont{
            padding-left: 5px;
            color: #fff;
          }
        }

    }
  }
</style>
