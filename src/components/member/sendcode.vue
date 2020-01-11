<template>
  <button type="button" class="btn btn-default"  @click="sendcode">{{codemsg}}</button>
</template>

<script>

    import Validator from '@/utils/validator.js'
    export default {
        name: "sendcode",
        data(){
            return {
                codemsg:"请输入验证码",
                is_code_sending:false
            }
        },
        props:{
            phone:{
                type:String,
                default:''
            },
            type:{
                type:String,
                default:'1'
            }
        },
        methods:{
            sendcode(){
                let phone = this.phone;
                let type = this.type;
                let ret = Validator.v.vPhone(this.phone);


                if (ret != true) {
                    this.showmsg('info',ret)
                    return false;
                }

                if (this.is_code_sending) return;

                let count = 60;
                let that = this;
                let timer = setInterval(() => {

                    if (count-- == 0) {
                        that.codemsg = "发送验证码";
                        that.is_code_sending = false;
                        clearInterval(timer);
                    } else {
                        that.codemsg = count + "s后重发"
                        this.is_code_sending = true;
                    }

                }, 1000)
                this.$api({
                    service:"member.sendsms",
                    phone:phone,
                    type:type
                }).then(res=>{
                  this.showmsg('info','验证码发送成功')
                })
                // sendMsg(param).then(res => {
                //
                // })
            }
        }
    }
</script>

<style scoped>

</style>
