// search组件的vuex状态
import { reqGetProductList } from "@api/search";

export default {
  state: {
    productList: {},
  },
  getters: {
    trademarkList(state) {
      return state.productList.trademarkList;
    },
    attrsList(state) {
      return state.productList.attrsList;
    },
    goodsList(state) {
      return state.productList.goodsList;
    },
    totalPages(state) {
      return state.productList.totalPages;
    },
  },
  actions: {
    /* 
      1.请求搜索界面的所有数据用于展示
    */
    async getProductList({ commit }, data = {}) {
      const productList = await reqGetProductList(data);
      commit("GET_PRODUCT_LIST", productList)
    },
  },
  mutations: {
    /* 
      1.请求搜索界面的所有数据用于展示
    */
    GET_PRODUCT_LIST(state, productList) {
      state.productList = productList;
    },
  },
};
