/*
  1.进行具体的请求
    引入设置好的axios实例
    调用方法进行请求
      此时是一个instance实例
*/
import instance from "@utils/request";

const reqLogin = (phone, password) => {
  instance({
    /*
      请求方式
      请求地址
      请求参数
        post请求的参数写在data中
    */
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(2);
    console.log(err);
  });
};

export default reqLogin;
