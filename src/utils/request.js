/* 
  封装axios拦截器
    1. 设置公共的请求地址前缀
    2. 请求拦截器：添加公共参数
    3. 响应拦截器: 
      成功：返回成功的Promise，值为成功的数据
      失败：返回失败的Promise，值为失败的原因

  把登录成功生成的token添加到请求头

  开发环境
    在开发环境下，是通过代理来解决跨域问题实现请求
    代码是运行在编译器的这个服务器上的，和目标服务器不同源，因此通过代理服务器来解决跨域问题
    在开发环境下使用devServer.proxy 选项来配置代理服务器，注意：使用这种方式只是解决开发环境下的跨域问题，所以生产环境下需要另行设置来解决
  生产环境
    在生产环境下，代码也是运行在一个和目标服务器不同源的服务器上
    
    在生产环境下和开发环境下都可以直接用最终请求的地址，在开发环境下可以直接配置
    在生产环境成功运行
*/
console.log(process.env.NODE_ENV);

import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Message } from "element-ui";
import store from "../store";
// 引入进度条插件
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const instance = axios.create({
  //  / 就是当前服务器地址
  baseURL: "http://182.92.128.115/api", // 公共的基础路径
  // baseURL: "/api", // 公共的基础路径
  headers: {
    // token: 'xxx' // 不行，登录接口不需要
  },
});

// 设置请求拦截器
instance.interceptors.request.use(
  (config) => {
    // config 请求的配置对象
    // 将来发送请求（请求地址，请求参数，请求方式等）都会在config中找

    // 开始进度条
    NProgress.start();

    // 修改config，用来添加公共的请求参数
    // if (token) {
    //   config.headers.token = token;
    // }
    // 如果浏览器中有userTempId，就不用生成
    let userTempId = window.localStorage.getItem("userTempId");
    if (!userTempId) {
      // 生成userTempId
      userTempId = uuidv4();
      // 把userTempId保存在浏览器中
      window.localStorage.setItem("userTempId", JSON.stringify(userTempId));
    }

    // 把userTempId添加到请求头
    config.headers.userTempId = userTempId;
    // 把token添加到请求头
    // 在没有登录没有生成token的情况下，值为undefined
    config.headers.token = store.state.user.token;
    return config;
  }
  // 初始化Promise.resolve()返回默认成功的Promise，只会触发成功的回调
  // () => {},
);
// 设置响应拦截器
instance.interceptors.response.use(
  // 响应成功：当响应状态码为 2xx
  (response) => {
    /* 
      响应成功不能代表功能成功，只是代表有响应结果
        功能成功是否成功看 code
          成功：200
          失败：201 202
      
      返回一个具体为
        成功：成功的数据
        失败：失败的原因
      的结果   

      response的数据结构：
        {
          headers: {},
          status: {},
          request: {},
          data: { // 响应的数据
            code: 200,
            message: "成功",
            data:{
              nickName:"Administrator",
              name:"Admin",
              token: 90aa16f24d04c7d882051412f9ec45b"
            },
            ok: true 
          } 
        }
    */
    // 进度条结束
    NProgress.done();
    // console.log("response", response);
    // 判断响应的code是否是200
    if (response.data.code === 200) {
      // 返回成功的响应数据
      return response.data.data;
    }

    // const { message, data } = response.data;
    const { message } = response.data;

    // 提示错误
    // 功能失败 --> 返回失败的Promise
    // if (data === "手机号已经存在") {
    //   Message.error(data);
    // } else {
    //   Message.error(message);
    // }

    return Promise.reject(message);
  },
  // 响应失败：当响应状态码不是 2xx
  (error) => {
    // console.dir(error);
    // 进度条结束
    NProgress.done();
    const message = error.message || "网络错误";
    // 提示错误
    Message.error(message);
    return Promise.reject(message);
  }
);

export default instance;
