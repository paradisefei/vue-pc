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
      2.floor
        数据用随机生成
        home组件中使用
        服务器

    4.封装Carousel组件
      公共组件中
    5.遍历展示floor中的数据
  
  4.搜索界面数据展示
    1.测试接口
      地址
      请求方式
      参数
      返回值
    2.静态页面

    3.点击品牌
        请求参数改变-返回的数据就会变-重新渲染
        点击
    4.点击属性
  
  5.封装分页器

  6.Detail组件

  7.购物车
    1.增减商品数量
    2.获取购物车数据列表，然后后续的修改就修改的vuex中的数据
      配置api
    3.uuid
        未登录用户的临时ID
        如果用户没有登录，没有主体，也就没有购物车一说了，所以如果没有登录的话需要生成一个表示用户的临时ID，在这个ID下进行购物车的各种操作

        在请求拦截器中生成
          在每次请求的时候都会生成，所以第一次生成时需要保存在浏览器中，然后再加一个判断，如果浏览器中有就不需要生成
    4.购物车结算
        动态渲染数据，而不是写死
    
  8.注册
      渲染
  9.登录
    登录成功跳转到首页后，要把用户名写在Header组件中
  10.结算
      登录之后浏览器就不应该有userTempId了，并且需要把在这个userTempId临时Id下添加的商品能在登录成功的用户(token)下使用
      把userTempId和token一起发送到服务器中，服务器自己能实现把userTempId下的商品加到token下
        浏览器是否还有userTempId
      未登录时会添加商品，在登录以后就把商品添加到登录时的这个状态里面
        未登录时，点击结算按钮会跳转到登录页面
        浏览器保存了token，就说明已经登录了
        先把组件渲染出来
      注销登录后，购物车列表重新置空
      把token和userTempId一起添加到请求头中的话，后台自动就会把userTempId下添加的商品移入到token这个账号下，登录之后产生了token，就把token添加到请求头中
  11.权限验证
      1.在没有登录的情况下，无法直接通过地址栏进入trade，pay，paysuccess路由，如果进入了，就会跳转到shopcart路由
      2.路由守卫
        跳转前，解析时，跳转后
      3.addsuccess前面一个路由必须是detail路由
  12.渲染trade组件
  13.点击提交订单
      pay组件
  14.查看订单
      接口，发送请求
  15.图片懒加载
      对图片而言，图片在进入到视口时再加载
      下包
      引入插件
      使用插件
  16.解决生产环境下的跨域问题
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

import "./styles/iconfont.css";

import "./plugins/element.js";

import "./plugins/lazy.js";

// 引入mockServer
import "./mock/mockServer";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
  // 应用router
  router,
  store,
}).$mount("#app");
