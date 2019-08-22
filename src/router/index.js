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
		{
			path: '/today',
			name: 'today',
			component: resolve => require(['../components/vue/today.vue'], resolve),
			meta: {
				title: '今日实时数据',
				keepAlive: true
			}
		},
		{
			path: '/yibao',
			name: 'yibao',
			component: resolve => require(['../components/vue/yibaoAdd.vue'], resolve),
			meta: {
				title: '易宝进件',
				keepAlive: true
			}
		},
		{
			path: '/fuyou',
			name: 'fuyou',
			component: resolve => require(['../components/vue/fuyouAdd.vue'], resolve),
			meta: {
				title: '富有进件',
				keepAlive: true
			}
		},
		{
			path: '/interface',
			name: 'interface',
			component: resolve => require(['../components/vue/interface.vue'], resolve),
			meta: {
				title: '接口记录',
				keepAlive: true
			}
		},
		{
			path: '/key',
			name: 'key',
			component: resolve => require(['../components/vue/key.vue'], resolve),
			meta: {
				title: '接口记录',
				keepAlive: true
			}
		},
	]
})
