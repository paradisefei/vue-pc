import reqCategories from "@api/allCategories.js";

const state = {
  allCategories: [],
};

const getters = {

};
/*
  allCategories的数据是需要发送请求来获取的，发送请求的操作放在actions中进行
*/
const actions = {
  async reqCategoriesA(store) {
    /*
      将请求回来的数据提交到mutations中去对state进行修改
    */
    const res = await reqCategories();
    store.commit("REQ_CATEGORIES_M", res);
  },
};

const mutations = {
  REQ_CATEGORIES_M(stateM, res) {
    state.allCategories = res.slice(0, 15);
  },
};
export default ({
  state,
  getters,
  actions,
  mutations,
});
