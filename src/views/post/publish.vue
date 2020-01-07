<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">
        <i class="iconfont">&#xe619;</i>
        发布帖子</div>
      <div class="panel-body">
        <div class="form-group">
          <input type="text" class="form-control" id="exampleInputEmail1" placeholder="请输入帖子标题">
        </div>

        <div class="checkbox">
          <label><input type="radio" name="type"><span>html-css</span></label>
          <label><input type="radio" name="type"><span>html5-css3</span></label>
          <label><input type="radio" name="type"><span>javascript</span></label>
          <label><input type="radio" name="type"><span>vue</span></label>
          <label><input type="radio" name="type"><span>react</span></label>
          <label><input type="radio" name="type"><span>webpack</span></label>
          <label><input type="radio" name="type"><span>docker</span></label>
          <label><input type="radio" name="type"><span>redis</span></label>
          <label><input type="radio" name="type"><span>websocket</span></label>
          <label><input type="radio" name="type"><span>mysql</span></label>
          <label><input type="radio" name="type"><span>linux</span></label>
          <label><input type="radio" name="type"><span>chrome插件</span></label>
          <label><input type="radio" name="type"><span>php</span></label>
          <label><input type="radio" name="type"><span>nodejs</span></label>
          <label><input type="radio" name="type"><span>es6</span></label>
          <label><input type="radio" name="type"><span>ngxin</span></label>
          <label><input type="radio" name="type"><span>git</span></label>
          <label><input type="radio" name="type"><span>服务器</span></label>
          <label><input type="radio" name="type"><span>软件工具</span></label>
          <label><input type="radio" name="type"><span>微信开发/微信小程序</span></label>
          <label><input type="radio" name="type"><span>其他</span></label>
        </div>

        <div class="markdown">
          <mavon-editor
            style="height: 300px;padding: 15px;"
            placeholder="请输入帖子内容 ( 支持markdown语法,支持图片拖拽上传,图片复制后粘贴上传,点击上方按钮插入代码 )"
            :toolbars="toolbars"

            v-model="content"
          />
        </div>
      </div>
      <div class="panel-footer">
        <button class="btn btn-primary">保存提交</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                toolbars: {
                    code: true, // code

                },
                content:""
            }
        },
        components: {
        },
        mounted() {
        },
        methods:{

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
