import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
			name: 'login',
			component: resolve => require(['../components/vue/login.vue'], resolve),
			meta: {
        title: '系统首页',
        keepAlive: false
			}
    },
    {
			path: '/home',
			name: 'home',
			component: resolve => require(['../components/vue/home.vue'], resolve),
			meta: {
        title: '系统首页',
        keepAlive: true
			}
		},
  ]
})
