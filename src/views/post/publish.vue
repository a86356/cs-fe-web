<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <i class="iconfont">&#xe619;</i>
        发布帖子</div>
      <div class="panel-body">
        <div class="form-group">
          <input type="text" class="form-control" v-model="title" placeholder="请输入帖子标题">
        </div>

        <div class="checkbox">

          <label v-for="(item,index) in categoryList" :key="index"><input v-model="typeId" :value="item.id" type="radio" name="type"><span>{{item.name}}</span></label>

        </div>

        <div class="markdown">
          <mdeditor @change="change"></mdeditor>
        </div>
      </div>
      <div class="panel-footer" style="background: #fff">
        <button class="btn btn-primary" @click="submit">发布帖子</button>
      </div>
    </div>
  </div>
</template>

<script>

    import mdeditor from "../../components/mdeditor";
    export default {
        name: "",
        data() {
            return {
                categoryList:[],
                content:"",
                title:"",
                typeId:""
            }
        },
        components: {
            mdeditor
        },
        mounted() {
            this.loadCategory();
        },
        methods:{
          loadCategory(){
              this.$api({
                  service:"classes.getallcategory"
              }).then(res=>{

                  this.categoryList = res.list.filter(item=>{
                      //排除掉全部
                      return item.sort<10
                  });
              })
          },
          submit(){
              let {content,title,typeId} = this;

              if(title==''){
                  this.showmsg('info','请填写标题');
                  return;
              }
              if(typeId==''){
                  this.showmsg('info','请选择文章类型');
                  return;
              }

              if(content==''){
                  this.showmsg('info','请填写内容');
                  return;
              }
              let typeName ;

              for (let i=0;i<this.categoryList.length;i++){
                  if(this.categoryList[i].id==typeId){
                      typeName = this.categoryList[i].name;
                  }
              }

              this.$api({
                  service: "article.publish",
                  typeId:typeId,
                  typeName:typeName,
                  title:title,
                  content:content
              }).then(res=>{
                  this.showmsg('success','发布成功');
                  this.nav('/cs/postlist');
              })
          },
          change(cnt){

              this.content = cnt;
          }


        }
    }
</script>

<style scoped lang="less">
  .register-box{
    background: #fff;
    margin-bottom: 30px;
    padding: 20px;
  }
  .btn-forgetpassword{
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
  }
  .checkbox{
    font-size: 0.16rem;
    line-height: 30px;
    span{
      padding-left: 8px;
    }
  }
</style>
