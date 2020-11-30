/*
  1. 显示组件

  2.配置路径别名

  3.axios请求
    1.公共基础路径

  4.进度条

  5.错误提示
    在响应拦截器的失败回调中使用
    给vue添加element ui

  6.使用vuex管理三级分类列表数据
    使用modules进行模块化

  7.点击跳转
    在home中点击
      一级
      二级
      三级
      点击进入search组件
    在search中鼠标hover在全部商品分类上时会出现列表

*/
import Vue from "vue";

import VueRouter from "vue-router";

import store from "./store";

import App from "./App.vue";

import router from "./router";

// 引入重置样式
import "./styles/normalize.css";

import './plugins/element';

// import './plugins/swiper';

Vue.config.productionTip = false;

/*
  方法赋值给一个变量
    地址
    函数代码
*/
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  /*
    1.originalPush是旧的push函数地址
    2.完了之后再把push赋一个新的地址
    3.此时VueRouter.prototype.push和originalPush的地址就不一样了
    4.最终在执行的时候就不会导致死循环

    如果用户想要自己来处理的话也可以自己处理
  */
  if (onComplete && onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  }
  return originalPush.call(this, location, () => {

  }, () => {
    console.log("hello");
  });
};
// VueRouter.prototype.push = function push(location) {
//   /*
//     1.此时VueRouter.prototype.push中保存的是新函数的地址
//     2.在内部执行时，push会执行新地址的这个函数，新地址这个函数中又有这个函数，导致死循环
//   */
//   return VueRouter.prototype.push.call(this, location).catch((err) => err);
// };

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
