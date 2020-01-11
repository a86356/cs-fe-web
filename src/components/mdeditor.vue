<template>
  <mavon-editor
    style="height: 500px;padding: 15px;max-width: 100%"
    placeholder="请输入内容 ( 支持markdown语法,支持图片拖拽上传,图片复制后粘贴上传,点击上方按钮插入代码 )"
    :toolbars="mytoolbars"
    @imgAdd="$imgAdd"
    v-model="content"
    @change="change"
    ref="md"
  />
</template>

<script>

  import config from "../config/config";
  import axios from 'axios';
    export default {
        name: "mdeditor",
        data(){
            return {
                mytoolbars:{
                    code: true, // code
                    preview:true,

                    imagelink: true, // 图片链接
                },
                content:""
            }
        },
        methods:{

            change(){
                this.$emit('change',this.content)
            },
            $imgAdd(pos, $file){

                let formData = new FormData();
                formData.append("file", $file);

                axios.post(config.uploadPicUrl, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then(res => {

                    let { msg, url } = res.data;
                    this.$refs.md.$img2Url(pos, url);
                    this.change();
                })

            },
            clear(){
                this.content=''
            }
        }

    }
</script>

<style scoped>

</style>
