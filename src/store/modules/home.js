// home组件的vuex状态
import { reqGetBaseCategoryList, reqGetMockBanner } from "@api/home";

export default {
  state: {
    categoryList: [], // 首页三级分类列表数据
    carouselList: [],
  },
  getters: {},
  actions: {
    // 获取首页三级分类列表数据
    async getCategoryList({ commit }) {
      // 发送请求
      const categoryList = await reqGetBaseCategoryList();
      // 触发mutation函数
      commit("GET_CATEGORY_LIST", categoryList);
    },
    async getMockBanner({ commit }) {
      console.log(1);
      // 发送请求
      const carouselList = await reqGetMockBanner();
      // 触发mutation函数
      commit("GET_MOCK_BANNER", carouselList);
    },
  },
  mutations: {
    GET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList.slice(0, 13);
    },
    GET_MOCK_BANNER(state, carouselList) {
      state.carouselList = carouselList;
    },
  },
};
