<template>
  <div class="container">
    <div class="panel panel-default shadow-sm">
      <div class="panel-heading">每日签到</div>
      <div class="panel-body" v-if="login">

        <div class="startcheck">
          <div class="">
            <input type="text" v-model="cnt"  class="form-control" placeholder="请输入你今天想说的话" aria-describedby="basic-addon2">
          </div>
          <div class="icons clearfix">
            <div class="checkpic" v-for="(item,index) in moodslist" :key="index" :class="moodId==item.id?'active':''" @click="selectMood(item)">
              <img :src="item.img" :alt="item.name">

              <tips :tips="item.name"></tips>

            </div>

          </div>
        </div>

        <button type="button" class="btn btn-primary trans" @click="checkin">点我签到</button>

      </div>
    </div>

    <div class="panel panel-default shadow-sm">
      <div class="panel-heading">今日签到排行</div>
      <div class="panel-body">
        <table class="table table-bordered table-striped table-hover table-responsive">
          <thead>
            <tr>
              <th>会员</th>
              <th>今日签到时间</th>
              <th>总签到天数</th>
              <th>签到心情</th>
              <th>签到内容</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in list1" :key="index">
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
                <img :src="item.moodpic" alt="">
              </td>
              <td>
                {{item.cnt}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script>

    import tips from "../../components/common/tips";

    export default {
        name: "index",
        data(){
          return{
              isLogin:false,
              cnt:"",
              moodId:1,
              moodslist:[
                  {id:1,img:require("../../assets/images/checkin/kx.gif"),name:'开心',key:"kx"},
                  {id:2,img:require("../../assets/images/checkin/ng.gif"),name:'难过',key:"ng"},
                  {id:3,img:require("../../assets/images/checkin/ym.gif"),name:'郁闷',key:"ym"},
                  {id:4,img:require("../../assets/images/checkin/wl.gif"),name:'无聊',key:"wl"},
                  {id:5,img:require("../../assets/images/checkin/nu.gif"),name:'怒',key:"nu"},
                  {id:6,img:require("../../assets/images/checkin/ch.gif"),name:'擦汗',key:"ch"},
                  {id:7,img:require("../../assets/images/checkin/fd.gif"),name:"奋斗",key:"fd"},
                  {id:8,img:require("../../assets/images/checkin/yl.gif"),name:"慵懒",key:"yl"},
                  {id:9,img:require("../../assets/images/checkin/shuai.gif"),name:"衰",key:"shuai"},
              ]
          }
        },
        computed:{
          login(){
               return this.$store.getters.islogin;
          }
        },
        components:{
          tips
        },
        filters: {

        },
        mounted() {
          this.loadList();
        },
        methods:{
            loadList(){

                this.$api({
                    service:"checkin.getlist"
                }).then(res=>{
                    let list = res.list;
                    let moodslist = this.moodslist;
                    for (let i=0;i<list.length;i++){
                        let moodid = list[i].mood;
                        for (let j=0;j<moodslist.length;j++){
                            if(moodid==moodslist[j].id){
                                list[i].moodpic = moodslist[j].img
                            }
                        }
                    }


                    this.list1= list;

                })
            },
            checkin(){
              if(!this.moodId){
                  this.showmsg('info','请选择心情');
                  return;
              }
              if(!this.cnt || this.cnt==''){
                  this.showmsg('info','请输入签到内容哦~~');
                  return;
              }
              this.$api({
                  service:"checkin.daycheckin",
                  mood:this.moodId,
                  cnt:this.cnt
              }).then(res=>{
                  this.showmsg('success','签到成功');
              })

            },
            selectMood(item){
                this.moodId = item.id;
            }
        }
    }
</script>

<style scoped lang="less">
  @import "../../assets/css/common.less";

  .startcheck{
    .shadow-sm;
    .icons{
      margin: 15px 0;
      padding-bottom: 20px;
    }
    .checkpic{
      float: left;
      padding: 8px;
      position: relative;
      border: 4px solid @border;
      border-radius: 8px;
      background: #f3f3f3;
      margin-right: 8px;
      cursor: pointer;

      &:hover{
        .tips{
          opacity: 0.9;
        }
      }
    }

    .active{
      border-color: @mainColor;
    }
  }

  .table {

    tbody{
      td{
        line-height: 45px;
      }
    }
  }
</style>
