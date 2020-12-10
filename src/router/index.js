// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "Home" */ "../views/Home");
const Login = () => import(/* webpackChunkName: "Login" */ "../views/Login");
const Register = () => import(/* webpackChunkName: "Register" */ "../views/Register");
const Search = () => import(/* webpackChunkName: "Search" */ "../views/Search");
const Detail = () => import(/* webpackChunkName: "Detail" */ "../views/Detail");
const AddCartSuccess = () => import(/* webpackChunkName: "AddCartSuccess" */ "../views/AddCartSuccess");
const ShopCart = () => import(/* webpackChunkName: "ShopCart" */ "../views/ShopCart");
const Trade = () => import(/* webpackChunkName: "Trade" */ "../views/Trade");
const Pay = () => import(/* webpackChunkName: "Pay" */ "../views/Pay");
const PaySuccess = () => import(/* webpackChunkName: "PaySuccess" */ "../views/PaySuccess");
const Center = () => import(/* webpackChunkName: "Center" */ "../views/Center");

// import Home from "../views/Home";
// import Login from "../views/Login";
// import Register from "../views/Register";
// import Search from "../views/Search";
// import Detail from "../views/Detail";
// import AddCartSuccess from "../views/AddCartSuccess";
// import ShopCart from "../views/ShopCart";
// import Trade from "../views/Trade";
// import Pay from "../views/Pay";
// import PaySuccess from "../views/PaySuccess";
// import Center from "../views/Center";
import store from "../store";

// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return push.call(this, location, onComplete, () => { });
};

VueRouter.prototype.replace = function (location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => { });
};

// 安装插件
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      // 当组件加载显示时，meta中的参数会传到$route中
      // 当组件不加载显示时，meta中的参数不会传
      meta: {
        isFooterHide: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isFooterHide: true,
      },
    },
    {
      // ?: 代表 params 参数是可选的
      name: "search",
      path: "/search/:searchText?",
      component: Search,
    },
    {
      name: "detail",
      path: "/detail/:id?",
      component: Detail,
    },
    // 配置添加购物车成功的组件路由，skuNum表示商品数量，作为query参数传过来
    // 路由地址和请求地址不是一样的
    {
      name: "addcartsuccess",
      path: "/addcartsuccess/:skuNum?",
      component: AddCartSuccess,
      /* 
        路由独享守卫，该守卫只在我这个路由下独享，只有进入到我这个路由下才会起作用
          从别的地方跳过来 
          从这里跳到别的地方
      */
      beforeEnter: (to, from, next) => {
        if (from.name === "detail") {
          next();
        } else {
          next({
            name: "shopcart",
          })
        }
      },
    },
    // 购物车路由
    {
      name: "shopcart",
      path: "/shopcart",
      component: ShopCart,
    },
    // 订单信息路由
    {
      name: "trade",
      path: "/trade",
      component: Trade,
    },
    // 支付路由
    {
      name: "pay",
      path: "/pay",
      component: Pay,
    },
    // 支付成功路由
    {
      name: "paysuccess",
      path: "/paysuccess",
      component: PaySuccess,
    },
    // 中心路由
    {
      name: "center",
      path: "/center/myorder",
      component: Center,
    },
  ],
});

const unLoginToShopCart = ['/trade', '/pay', '/paysuccess'];
// 配置路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from, next);
  /* 
      全局前置守卫
        每一次的跳转都会触发这个回调
        必须调用next
        to: 要去的目标路由信息
        from: 离开的路由信息
      从一个路由跳转到另一个路由时，to可以打印出目标路由信息，from可以打印出离开的路由信息
  */
  if (unLoginToShopCart.indexOf(to.path) > -1 && !store.state.user.token) {
    // 没有登录时，地址栏输入trade，会跳转到shopcart，引入token
    next({
      path: "/shopcart"
    });
    // 进来了这个判断，执行了next方法，return了之后还会执行后面的打印
    return;
  }
  // 必须要调用next()方法才能跳转，如果没有给参数就是跳转到to，如果给了参数就是跳转到参数表示的那个路由
  next();
});

// 路由独享守卫
export default router;
