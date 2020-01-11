import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/views/home/home.vue';
import homeIndex from '@/views/home/index.vue';
import VideoList from '@/views/video/list.vue';
import VideoLastest from '@/views/video/lastest.vue';
import VideoDetail from '@/views/video/detail.vue';
import Register from '@/views/member/register.vue';
import Login from '@/views/member/login.vue';
import Forgetpwd from '@/views/member/forgetpwd.vue';
import PostPublish from '@/views/post/publish.vue';
import PostList from '@/views/post/postlist.vue';
import PostDetail from '@/views/post/detail.vue';
import Contactus from '@/views/contactus/index.vue';
import SubscribeIndex from '@/views/subscribe/index.vue';
import Setting from '@/views/member/setting.vue';
import MemberInfo from '@/views/member/info.vue';
import Checkin from '@/views/checkin/index.vue';


Vue.use(Router)

var menu = [
  {
    path: '/',  redirect: '/cs/home' ,
  },
  {
    path: '/cs', component: Home,
    children: [
      { path: 'home', component: homeIndex, title: "首页", icon: "", menu: true, name: 'home' },
      { path: 'videolist', component: VideoList, title: "视频列表", icon: "", menu: true, name: 'videolist' },
      { path: 'videodetail', component: VideoDetail, title: "视频详情", icon: "", menu: true, name: 'videodetail' },
      { path: 'register', component: Register, title: "注册", icon: "", menu: true, name: 'register' },
      { path: 'login', component: Login, title: "登录", icon: "", menu: true, name: 'login' },
      { path: 'forgetpassword', component: Forgetpwd, title: "忘记密码", icon: "", menu: true, name: 'forgetpassword' },
      { path: 'postpublish', component: PostPublish, title: "发布帖子", icon: "", menu: true, name: 'postpublish' },
      { path: 'postlist', component: PostList, title: "帖子列表", icon: "", menu: true, name: 'postlist' },
      { path: 'contactus', component: Contactus, title: "联系我们", icon: "", menu: true, name: 'contactus' },
      { path: 'postdetail', component: PostDetail, title: "帖子详情", icon: "", menu: true, name: 'postdetail' },
      { path: 'subscribe', component: SubscribeIndex, title: "订阅", icon: "", menu: true, name: 'subscribe' },
      { path: 'setting', component: Setting, title: "个人设置", icon: "", menu: true, name: 'setting' },
      { path: 'memberinfo', component: MemberInfo, title: "个人中心", icon: "", menu: true, name: 'memberinfo' },
      { path: 'checkin', component: Checkin, title: "签到", icon: "", menu: true, name: 'checkin' },
      { path: '*',redirect: '/cs/home' },
    ]
  },
  { path: '*', redirect: '/cs/home'},
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

