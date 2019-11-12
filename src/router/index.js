import Vue from 'vue'
import Router from 'vue-router'


import HomeIndex from '@/views/home/index.vue';
import HomeHome from '@/views/home/home.vue';
import ClassesIndex from '@/views/classes/index.vue';
import ContactUsIndex from '@/views/contactus/index.vue';
import TeachmodeIndex from '@/views/teachmode/index.vue';
import VideoIndex from '@/views/video/index.vue';

Vue.use(Router)

var menu = [
  {
    path: '/',  redirect: '/home/index' ,
  },
  {
    path: '/home', component: HomeIndex, title: "首页", icon: "ios-calendar-outline", name: "homeindex",
    children: [
      { path: 'index', component: HomeHome, title: "首页", icon: "", menu: true, name: 'home' },
      { path: 'classdetail', component: ClassesIndex, title: "课程详情", icon: "", menu: true, name: 'classdetail' },
      { path: 'teachmode', component: TeachmodeIndex, title: "教学模式", icon: "", menu: true, name: 'teachmode' },
      { path: 'video', component: VideoIndex, title: "视频课程", icon: "", menu: true, name: 'video' },
      { path: 'contactus', component: ContactUsIndex, title: "联系我们", icon: "", menu: true, name: 'contactus' },
    ]
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

