
import Vue from 'vue';
import { router } from './router';

import App from './App.vue'
import '@/assets/css/common.less'

import iView from 'iview';

import 'iview/dist/styles/iview.css';
import mixin from '@/mixin/mixin.js'

import store from '@/store/index.js'



//载入组件
Vue.use(iView);

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

import BaseForm from '@/components/form/Base'

Vue.component("base-form", BaseForm);


import { createApi } from '@/api/axios';

Vue.prototype.$post = createApi();


import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)





var x,y,z;

// 2*x+y+0.5z=100;
// x+y+z =100
// x,y,z 均为整数

// 2x+100-x-z+0.5z => x+100-0.5z=100 => 2x+200-z=100 => 2x-z=100
//假设  50<=x<100

//var z= 2x-100





/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
export default vue;
