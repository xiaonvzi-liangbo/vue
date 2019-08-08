// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';// 导入路由
import VueRouter from 'vue-router';
import VueBus from 'vue-bus';


/* 引入element UI组件 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.use(VueRouter);// 通过Vue的use方法注入VueRouter
Vue.use(VueBus);/* bus */
Vue.config.productionTip = false;



import './components/css/main.css'/* 引入css样式 */


// 以下注释表示此处new的vue无需赋值给一个变量，跳过new的新对象赋值机制
/* eslint-disable no-new */
new Vue({
  // 显示的节点处，此处为入口页的id为app的盒子
  el: '#app',
  // （此处相当于router:"router"）实例化一个变量
  router,
  render: h => h(App), 
  // 显示的组件注册
  components: { App },
  // 显示的模板
  template: '<App/>',

});