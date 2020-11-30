// @ts-nocheck
import Vue from "vue";
import App from "./App.vue";

import router from "./router";

// 引入公共资源
import "./styles/reset.css";

import './plugins/element';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  // 应用router
  router,
}).$mount("#app");
