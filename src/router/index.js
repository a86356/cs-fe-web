import Vue from 'vue'
import Router from 'vue-router'


import HomeIndex from '@/views/home/index.vue';
import ClassesIndex from '@/views/classes/index.vue';

Vue.use(Router)

var menu = [
  {
    path: '/', component: HomeIndex, title: "首页", icon: "ios-calendar-outline", name: "homeindex",
  },
  {
    path: '/home', component: HomeIndex, title: "首页", icon: "ios-calendar-outline", name: "homeindex",
  },
  {
    path: '/classdetail', component: ClassesIndex, title: "课程详情", icon: "ios-calendar-outline", name: "classdetail",
  },

];
var router = new Router({
  mode: 'history',
  routes: menu
})
router.beforeEach((to, from, next) => {
  // let token_key = BaseConfig.TOKEN_KEY;
  // if (to.path === '/login') {
  //   clearCacheData([token_key])
  // }
  // const LOGIN = getCacheData(token_key);
  //
  // if (!LOGIN && to.path !== '/login') {
  //
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
  next()
})

export {
  router,
  menu
}

