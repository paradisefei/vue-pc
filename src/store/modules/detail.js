// search组件的vuex状态
import { reqGetDetailList } from "@api/detail";

export default {
  state: {
    detailList: { categoryView: {}, skuInfo: { skuImageList: [] }, spuSaleAttrList: [] },
  },
  getters: {
    categoryView(state) {
      return state.detailList.categoryView;
    },
    skuInfo(state) {
      return state.detailList.skuInfo;
    },
    spuSaleAttrList(state) {
      return state.detailList.spuSaleAttrList;
    }
  },
  actions: {
    // 请求detail页面的数据
    async getDetailList({ commit }, id) {
      const detailList = await reqGetDetailList(id);
      commit("GET_DETAIL_LIST", detailList)
    },
  },
  mutations: {
    GET_DETAIL_LIST(state, detailList) {
      state.detailList = detailList;
    },
  },
};