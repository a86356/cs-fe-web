import Vue from 'vue'
import Router from 'vue-router'

import {clearCacheData, getCacheData} from '@/utils/cache'

import Login from '@/views/entry/login.vue';
import AdminIndex from '@/views/admin/index.vue';
import MemberList from '@/views/member/list.vue';
import ClassesList from '@/views/classes/list.vue';
import SegmentList from '@/views/segments/list.vue';
import PublishList from '@/views/post/publish.vue';
import ReplyList from '@/views/post/reply.vue';
import BaseConfig from '@/config/config'

Vue.use(Router)

var menu = [
  {
    path: '/', component: Login, title: "登录", icon: "ios-calendar-outline", name: "login",
  },
  {
    path: '/login', component: Login, title: "登录", icon: "ios-calendar-outline", name: "login",
  },
  {
    path: '/admin', component: AdminIndex, title: "会员管理", icon: "ios-calendar-outline", menu: true, name: "member",
    children: [
      { path: 'memberlist', component: MemberList, title: "会员", icon: "", menu: true, name: 'memberlist' },
    ]
  },
  {
    path: '/admin', component: AdminIndex, title: "课程管理", icon: "md-cube", menu: true, name: "classesmanage",
    children: [
      { path: 'classeslist', component: ClassesList, title: "课程列表", icon: "", menu: true, name: 'classeslist' },
      { path: 'segmentslist', component: SegmentList, title: "具体课程", icon: "", menu: true, name: 'segmentslist' },
    ]
  },
  {
    path: '/admin', component: AdminIndex, title: "帖子管理", icon: "md-cube", menu: true, name: "postmanage",
    children: [
      { path: 'publishlist', component: PublishList, title: "发帖管理", icon: "", menu: true, name: 'PublishList' },
      { path: 'replylist', component: ReplyList, title: "回帖管理", icon: "", menu: true, name: 'replylist' },
    ]
  },
];
var router = new Router({
  mode: 'history',
  routes: menu
})
router.beforeEach((to, from, next) => {
  let token_key = BaseConfig.TOKEN_KEY;
  if (to.path === '/login') {
    clearCacheData([token_key])
  }
  const LOGIN = getCacheData(token_key);

  if (!LOGIN && to.path !== '/login') {

    next({ path: '/login' })
  } else {
    next()
  }
  //next()
})

export {
  router,
  menu
}

