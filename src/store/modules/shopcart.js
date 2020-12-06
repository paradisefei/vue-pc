// search组件的vuex状态
import { reqGetCartList, reqGetAddToCart, reqGetCheckCart, reqGetDeleteCart } from "@api/shopcart";

export default {
  state: {
    cartList: [],
  },
  getters: {
  },
  actions: {
    // 请求购物车所有数据的列表
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      commit("GET_CART_LIST", cartList)
    },
    // 添加到购物车请求
    async getAddToCart({ commit }, { skuId, skuNum }) {
      /* 
        这个请求并没有返回实质性的数据，只是告诉你成功失败
        但是可以对购物车中的数据进行修改
      */
      await reqGetAddToCart({ skuId, skuNum });
      commit("GET_ADD_TO_CART", { skuId, skuNum })
    },
    // 切换商品状态
    async getCheckCart({ commit }, { skuId, isChecked }) {
      // 发送请求，对服务器中的数据进行修改
      await reqGetCheckCart({ skuId, isChecked });
      // 提交到mutations中，对vuex中的数据进行修改
      commit("GET_CHECK_CART", { skuId, isChecked })
    },
    // 删除商品
    async getDeleteCart({ commit }, skuId) {
      // 发送请求，对服务器中的数据进行修改
      await reqGetDeleteCart(skuId);
      // 提交到mutations中，对vuex中的数据进行修改
      commit("GET_DELETE_CART", skuId);
    }
  },
  mutations: {
    // 请求购物车所有数据的列表
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    // 修改购物车中的该件商品的数量
    GET_ADD_TO_CART(state, { skuId, skuNum }) {
      /* 
        找到这件商品，修改它的skuNum
      */
      state.cartList.forEach((cart) => {
        if (cart.skuId === skuId) { cart.skuNum += skuNum }
      })
    },
    GET_CHECK_CART(state, { skuId, isChecked }) {
      state.cartList.forEach((cart) => {
        if (cart.skuId === skuId) { cart.isChecked = isChecked }
      })
    },
    GET_DELETE_CART(state, skuId) {
      state.cartList = state.cartList.filter((cart) => cart.skuId !== skuId)
    },
  },
};