/*
  1. 显示组件
*/
import Vue from "vue";

import VueRouter from "vue-router";

import App from "./App.vue";

import router from "./router";

// 引入重置样式
import "./styles/normalize.css";

Vue.config.productionTip = false;

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
