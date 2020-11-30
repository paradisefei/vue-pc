import Mock from "mockjs";

import banner from "./banner.json";
/* 
    服务器的话就有路由路径
    请求
        ListContainer组件使用，在这里发起请求
        发请求的api

*/

/* 
    mock/banner的请求路径
    返回的数据
        数组
        数据长度4
        数据banner从文件中引入
            json数据
            使用mock随机生成
*/
Mock.mock("/mock/banner", "get", {
    code: 200,
    "data|4": banner,
});