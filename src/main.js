/*
  1. 显示组件
*/
import Vue from "vue";

import App from "./App.vue";

import router from "./router";

// 引入重置样式
import "./styles/normalize.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
