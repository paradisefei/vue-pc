import Vue from "vue";

import Vuex from "vuex";

import modules from "./modules";

Vue.use(Vuex);

const state = {
  testCount: 0,
};

const getters = {

};
/*
  allCategories的数据是需要发送请求来获取的，发送请求的操作放在actions中进行
*/
const actions = {
};

const mutations = {
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
});
