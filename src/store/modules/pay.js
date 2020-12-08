import { reqGetTradeInfo } from "@api/pay";

// 和结算相关的数据
/*
    1.点击结算发送的请求订单交易页信息
        直接使用，不用map的方式
    2.渲染收件人信息
*/
export default {
    state: {
        tradeList: {},
    },
    getters: {},
    actions: {
        // 请求订单交易页信息
        async getTradeInfo({ commit }) {
            const tradeList = await reqGetTradeInfo();
            commit("GET_TRADE_INFO", tradeList);
            return tradeList;
        },
    },
    mutations: {
        // 请求订单交易页信息
        GET_TRADE_INFO(state, tradeList) {
            state.tradeList = tradeList;
        },
    },
};