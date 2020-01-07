<template>
  <div class="">

    <div class="bottom">
      <div class="reply">
        <i class="iconfont icon">&#xe717;</i>
        <span class="floor">#12</span>
        <span class="name">张三</span>
        <i class="iconfont closeicon">&#xe618;</i>
      </div>
      <div class="edit">
        <mavon-editor
          style="height: 300px;"
          placeholder="请输入回复内容，回复间隔不超过30秒,点击上方眼睛预览 ( 支持markdown语法,支持图片拖拽上传,图片复制后粘贴上传,点击上方按钮插入代码 )"
          :toolbars="mytoolbars"
          :subfield="falseV"
          v-model="content"
        />
      </div>
      <div class="btnwrap">
        <button class="btn btn-primary">发布评论</button>
      </div>
    </div>

  </div>
</template>

<script>
    import videolist from "../../components/videolist";
    import loveandcomment from "../../components/common/loveandcomment";

    export default {
        data(){
            return {
                content:"",

            }
        },
        components:{
            videolist,
            loveandcomment
        }


    };
</script>

<style lang="less" scoped>

  @import "../../assets/css/common.less";



  .bottom{
    background: #fff;

    .btnwrap{
      text-align: right;
      padding: 10px ;
    }
    .reply{
      line-height: 25px;
      padding: 10px;
      margin-bottom: 2px;
      border: 1px solid @border;
      border-bottom: none;
      span,i{
        margin: 0 5px;
      }
      .closeicon{
        cursor: pointer;
        font-weight: bold;
        &:hover{
          opacity: 0.5;
        }
      }
    }
  }
.v-note-wrapper{
  box-shadow: none!important;
  border: 1px solid @border!important;
}
</style>
