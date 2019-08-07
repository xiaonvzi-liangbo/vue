<template>
  <div id="app">
    <headerNav></headerNav>
    <asideNav></asideNav>

    <div class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
        <!--     <contentHeader></contentHeader> -->
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
    <!-- 登录页 -->
    <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <!-- 希望登录页是不需要导航栏和侧边栏的，那么就需要规避掉登录页。 -->
  </div>
</template>

<script>
import header from "./components/vue/header.vue";
import aside from "./components/vue/aside.vue";

import bus from "./components/bus.js";
export default {
  name: "App",
  components: {
    headerNav: header,
    asideNav: aside
  },

  data() {
    return {
      tagsList: [],
      collapse: false,
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ],
        email: ""
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
