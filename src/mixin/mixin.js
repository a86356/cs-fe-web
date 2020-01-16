import Validator from '@/utils/validator.js'
import config from "../config/config";
import {getCacheData, setCacheData} from "../utils/cache";
import axios from 'axios';



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
        return;
      }
      this.nav(config.PUBLISHPOST_PATH)
    },
    checkLogin(){
      if(!this.isLogined()){
        this.goLogin();
      }
    },
    uploadavatar(event){

      let file=event.target.files[0]
      let formData = new FormData();
      formData.append("file", file);
      axios.post(config.uploadPicUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(res => {
        this.$set(this.data1,'avatar_url',res.data.url)

      })
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
    setquote(item){
      this.quote_id=item.id;
      this.quote_item=item;
    },
    clearquote(){
      this.quote_id=-1;
      this.quote_item={};
    },
    changemd(e){
      this.content=e;
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
    setCache(key,value){
      setCacheData(key,value)
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
    goArticleDetail(id,floor_id=''){

      this.$router.push({path:config.ARTICLEDETAIL_PATH,query:{id:id,floor_id:floor_id}})
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

//      console.log(window.document.location.pathname)
 //     this.setCache(config.BEFOREROUTER,window.document.location.pathname)

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
