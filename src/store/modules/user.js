// 用于登录注册相关数据及操作
import { reqRegister, reqLogin, reqLogout } from "@api/user";

export default {
    state: {
        // 如果浏览器中保存了就用浏览器中保存的那个值，如果浏览器中没有保存则为空串，浏览器中没有就说明还没有登录
        name: localStorage.getItem("name") || "",
        token: localStorage.getItem("token") || "",
    },
    getters: {},
    actions: {
        // 注册
        async registerAction({ commit }, { phone, password, code }) {
            await reqRegister({ phone, password, code });
            console.log(commit);
        },
        // 登录
        async loginAction({ commit }, { phone, password }) {
            /* 
                登录的请求会返回参数，有用的参数有name，token
                定义mutation函数，修改数据
            */
            const res = await reqLogin({ phone, password });
            commit("LOGIN_MUTATION", res);
        },
        // 退出登录
        async logoutAction({ commit }) {
            const res = await reqLogout();
            commit("LOGOUT_MUTATION", res)
        },
    },
    mutations: {
        // 登录成功后
        LOGIN_MUTATION(state, res) {
            state.name = res.name;
            state.token = res.token;
        },
        // 注销，修改vuex中的数据
        LOGOUT_MUTATION(state, res) {
            if (!res) {
                /* 
                    退出登录的时候只是把state中的name和token置为空
                */
                state.name = "";
                state.token = "";
            }
            localStorage.removeItem("name");
            localStorage.removeItem("token");
        }
    },
};