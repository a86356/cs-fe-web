import Validator from '@/utils/validator.js'
import config from "../config/config";
import {getCacheData} from "../utils/cache";



export default {
  data() {
    return {
      list1: [],
      counts:0,
      data1:{},
      falseV:false,


      page:1
    }
  },
  mounted() {

  },
  methods: {

    publistpost(){
      if(!this.isLogined()){
        this.nav(config.LOGIN_PATH)
      }
      this.nav(config.PUBLISHPOST_PATH)
    },
    checkLogin(){
      if(!this.isLogined()){


        this.nav(config.LOGIN_PATH)
      }
    },
    goSetting(){
      this.nav(config.SETTING_PATH);
    },
    goTopNow(){
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
    goBottomNow(){
      document.body.scrollTop = document.documentElement.scrollTop =99999

    },
    goGithub(){
      if(this.writerInfo.github){
        window.open(this.writerInfo.github);
      }
    },
    goVideo(class_id,seg_id='-1'){
      this.$router.push({path:config.VIDEODETAIL_PATH,query:{class_id:class_id,seg_id:seg_id}})
    },
    goSubscribe(){
      this.nav(config.SUBSCRIBE_PATH)
    },
    showmsg(type, msg) {
      switch (type) {
        case "info":
          this.$Message.info(msg);
          break;
        case "success":
          this.$Message.success(msg);
          break;
        case "warning":
          this.$Message.warning(msg);
          break;
        case "error":
          this.$Message.error({
            content: msg,
            duration: 5
          });
          break;
      }
    },
    switchRule(rule){
      let arr=[];
      Object.keys(rule).forEach(function(key){
        let type ;
        if(rule[key][0].required){
          type='required';
        }
        if(rule[key][0].email){
          type='email';
        }
        if(rule[key][0].phone){
          type='phone';
        }

        arr.push([key,type,rule[key][0].message])
      });
      return arr;
    },
    goArticleDetail(id){
      this.$router.replace({path:config.ARTICLEDETAIL_PATH,query:{id:id}})
    },
    isLogined(){
      if(this.getCache(config.TOKEN_KEY))
        return true
      else
        return  false
    },
    getCache(key){
      return getCacheData(key);
    },
    showNoticeSuccess(msg){
      this.$Notice.success({
        title:"成功",
        desc:msg,
        top: 100,
      })
    },

    showNoticeInfo(msg){
      this.$Notice.info({
        title:"消息",
        desc:msg,
        top: 100,
      })
    },
    goRegister(){
      this.nav(config.REGISTER_PATH)
    },
    goLogin(){
      this.nav(config.LOGIN_PATH)
    },
    goFotgetpwd(){
      this.nav(config.FORGETPWD_PATH)
    },
    pop(level) {
      this.$router.back(level)
    },
    gohome(){
      this.nav(config.HOME_PATH)
    },
    goCheckIn(){
      if(!this.isLogined()){
        this.nav(config.LOGIN_PATH)
      }

      this.nav(config.CHECKIN_PATH)
    },
    nav(path) {
      this.$router.push(path)
    },


  }
}
