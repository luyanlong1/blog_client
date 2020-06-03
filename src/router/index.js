import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 登录
    {
      path: '/login',
      name: 'login',
      component: () => import('../view/login.vue')
    },
    // 首页
    {
      path: '/',
      name: 'index',
      component: () => import('../view/show/index.vue')
    },
    // 博客详情
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import('../view/show/blog.vue')
    },
    // 后台管理
    {
      path: '/home',
      name: 'home',
      component: () => import('../view/admin/home.vue')
    }
  ]
})
