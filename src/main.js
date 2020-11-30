/* 
  1.列表在home组件固定显示，在search组件根据鼠标移入移出显示隐藏
  
  2.在点击了搜索之后路由到search组件时，又会再一次去请求数据
    每一次刷新的时候是要请求数据，但当数据存在时，仅页面的跳转不需要重新请求数据

  3.Mockjs模拟数据
      1.轮播
        1.使用Mockjs，最终要拿到图片，成功显示
          拿到图片，显示在轮播图位置
          该js文件是一个服务器
        2.实现轮播-swiper

*/
// @ts-nocheck
import Vue from "vue";
import App from "./App";

import router from "./router";
import store from "./store";

// 引入公共资源
import "./styles/reset.css";

// swiper的css文件
// import 'swiper/css/swiper.css';
import 'swiper/swiper-bundle.css';

import "./plugins/element.js";

// 引入mockServer
import "./mock/mockServer";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  // 应用router
  router,
  store,
}).$mount("#app");
