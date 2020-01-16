<template>
  <div class="container">
    <div class="body">

      <div class="searchwrap">
        <div class="input-group">
          <input type="text" class="form-control" @input="searchClasses" v-model="searchcontent" placeholder="请输入查询的内容">
          <div class="input-group-append">
            <button  class="btn btn-default" @click="searchClasses">搜索课程</button>
          </div>
        </div>
        <div class="row">
          <div class="searchitem">
            <div class="clearfix list">
              <div class="mylabel fl">技术选型</div>
              <div v-for="(item,index) in categoryList" :key="index" class="fl item"  :class="tecType==item.id?'active':''" @click="selectTech(item)">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="searchitem">
            <div class="clearfix list">
              <div class="mylabel fl">是否收费</div>
              <div class="fl item" :class="viptype==item.id?'active':''"  v-for="(item,index) in viptypes" :key="index" @click="selectVip(item)">{{item.name}}</div>
            </div>
          </div>
        </div>

      </div>

      <videolist :list="list1"></videolist>

      <pagination v-if="counts>0" :count="counts" @setpage="setpage"></pagination>

    </div>

  </div>
</template>

<script>
    import videolist from "../../components/videolist";
    import pagination from "../../components/pagination";
    export default {
        components:{
            videolist,
            pagination
        },
        data(){
            return {
                tecType:0,
                tecTypeAll:0,
                viptype:'-1',
                viptypes:[
                    {id:'-1', name:'全部'},
                    {id:'1', name:'免费'},
                    {id:'2', name:'付费'},
                ],
                categoryList:[],
                searchcontent:''
            }
        },
        mounted() {
          this.loadList();
          this.loadCategoryList();
        },
        methods:{
            loadList(){

                let tectype=this.tecType;
                let viptype=this.viptype;

                //全部技术选型
                if(this.tecType==this.tecTypeAll){
                    tectype='-1';
                }else{
                    this.categoryList.forEach(item=>{
                        if(tectype==item.id){
                            tectype=item.name
                        }
                    })
                }
                // seach
                let search='-1';
                if(this.searchcontent){
                    search = this.searchcontent
                }

                this.$api({
                    service:'classes.getlist',
                    page:this.page,
                    searchcontent:search,
                    viptype:viptype,
                    techtype:tectype
                }).then(res=>{
                    this.list1=res.list;
                    this.counts=res.count;

                })
            },
            setpage(params){
                this.goTopNow();
                this.page=params.page;
                this.loadList();
            },
            loadCategoryList(){
                this.$api({
                    service:'classes.getallcategory',
                }).then(res=>{
                    this.tecType = res.list[0].id
                    this.tecTypeAll = this.tecType;
                    this.categoryList=res.list;
                })


            },
            selectTech(item){
                this.tecType =item.id;
                this.page=1;
                this.loadList();
            },
            selectVip(item){
                this.viptype = item.id;
                this.loadList();
                this.page=1;
            },
            searchClasses(){
                this.viptype = '-1';
                this.tecType = this.tecTypeAll;
                this.page=1;
                this.loadList();
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
  .input-group{
    width: 85%;
    margin: 0 auto;
  }

  .searchwrap{
    margin-bottom: 30px;
  }
  .searchitem{
    width: 80%;
    margin: 0 auto;
    .list{
      line-height: 40px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid @border;
      .item{
        margin-top: 12px;
        line-height: 30px;
        margin-left: 8px;
        margin-right: 8px;

        padding: 0 10px;
        cursor: pointer;
        color: @title;
        &:hover{
          color:@subColor;
          text-decoration: underline;
        }
      }
      .active{
        background: @subColor;
        color: #fff;
        border-radius: 8px;
        &:hover{
          color: #fff;
        }
      }

      .mylabel{
        font-weight: bold;
        margin: 7px 8px;
      }
    }

  }

</style>
