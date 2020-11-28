import Vue from "vue";

import Search from "@views/Search/index.vue";

import VueRouter from "vue-router";

import Home from "@views/Home/index.vue";

import Register from "@views/Register/index.vue";
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
