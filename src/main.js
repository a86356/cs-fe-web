
import Vue from 'vue';
import { router } from './router';

import App from './App.vue'
//import '@/assets/css/common.less'


import mixin from '@/mixin/mixin.js'
import 'jquery'

import VueClipboard  from 'vue-clipboard2'

Vue.use( VueClipboard )


//载入组件

Vue.mixin(mixin);

Date.prototype.Format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

Vue.filter('cntime',function (fmt) {
  var now = new Date(fmt * 1000);

  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  return year + "年" + month + "月" + date + " " + hour + ":" + minute + ":" + second;
})


Vue.filter('beforedateline', function (value) {

  let nowTimeline = parseInt(new Date().getTime()/1000);
  let between = parseInt(nowTimeline-value);

  let val;
  //秒
  if(between<60){
    return between+"秒"
  }
  // 分钟
  if(60<=between   && between<3600){
    val= parseInt(between/60);

    return  val+"分钟"
  }

  //小时
  if(3600<=between && between<=3600*24){
    val= parseInt(between/3600);
    return  val+"小时"
  }

  //天
  if(3600*24<=between && between<=3600*24*31 ){
    val= parseInt(between/(3600*24));
    return  val+"天"
  }
  // 月
  if(3600*24*31<=between && between<=3600*24*31*12){
    val= parseInt(between/(3600*24*31));
    return  val+"月"
  }
  //年
  if(3600*24*31*12<=between){
    val= parseInt(between/(3600*24*31*12));
    return  val+"年"
  }

})



import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

import './assets/fonts/iconfont.css'

import {commonApi} from './api/apis'

Vue.prototype.$api = commonApi;

//iview
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

import store from '../src/store/index'


import Validator from '@/utils/validator.js'

Vue.prototype.$validator=Validator;

/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
export default vue;
