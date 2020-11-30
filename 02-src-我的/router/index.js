import Vue from "vue";

import Search from "src/router/node_modules/03-src/views/Search/index.vue";

import VueRouter from "vue-router";

import Home from "src/router/node_modules/03-src/views/Home/index.vue";

import Register from "src/router/node_modules/03-src/views/Register/index.vue";
// import Register from "../views/Register/index.vue";

import Login from "../views/Login/index.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      name: "search",
      path: "/search/:searchText?",
      component: Search,
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});
