/*
  对axios进行的一些设置
  1.基础路径
    之后的请求中就可以不写写api之前的内容了
  2.设置请求拦截器
  3.设置响应拦截器，然最终返回的是直接能用的数据

  进度条
    引入
  错误提示
  按钮
*/
import axios from "axios";

import NProgress from "nprogress";

import "nprogress/nprogress.css";

// 得到的是一个instance实例
const instance = axios.create({
  baseURL: "http://182.92.128.115/api",
});
/*
  设置请求拦截器
    1.只接受成功的回调
*/
instance.interceptors.request.use((config) => {
  NProgress.start();
  console.log(1111);
  return config;
});
/*
  设置响应拦截器
*/
instance.interceptors.response.use((response) => {
  /*
    响应成功，但功能不一定成功，所以要根据请求的数据来判断功能是否成功
  */
  NProgress.done();
  if (response.data.code === 200) {
    return response.data.data;
  }
  return Promise.reject(response.data.message);
}, (err) => {
  NProgress.done();
  return Promise.reject(err);
});
export default instance;
