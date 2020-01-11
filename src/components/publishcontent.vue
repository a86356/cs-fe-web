<template>
  <div class="cnt" id="copycode">
    <mavon-editor
      class="md"
      v-if="value"
      id="aaa"
      :value="value"
      :subfield = "false"
      :defaultOpen = "'preview'"
      :toolbarsFlag = "false"
      :editable="false"
      :scrollStyle="true"
      :ishljs = "true"
    ></mavon-editor>
  </div>
</template>

<script>
    export default {
        name: "publishcontent",
        props:['value'],
        mounted() {
            let that =this;
            $("#copycode").on('click',function (e) {
                // if($(e.target)[0].tagName=='PRE'){
                //
                //     let code = $(e.target).find("code").first();
                //
                //     if(code.get(0).tagName=='CODE'){
                //         let content = code.html();
                //
                //         content = `${content}`;
                //
                //         var aux = document.createElement("input");
                //         aux.setAttribute("value", content);
                //         aux.setAttribute('readonly','readonly')
                //         document.body.appendChild(aux);
                //         console.log(content);
                //         aux.setSelectionRange(0, content.length);
                //
                //         aux.select();
                //         document.execCommand("copy");
                //         document.body.removeChild(aux);
                //         that.showmsg('info',"代码复制成功");
                //     }
                //
                //
                // }
            })

        }
    }
</script>

<style scoped lang="less">

</style>
