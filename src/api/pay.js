import request from "@utils/request";

// 请求订单交易信息
export const reqGetTradeInfo = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade",
  });
};
// 提交订单
export const reqGetSubmitOrder = ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList,

}) => {
  return request({
    method: "POST",
    url: `/order/auth/submitOrder`,
    params: {
      tradeNo,
    },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList,
    },
  });
};

// 获取订单支付信息：可以得到图片拿去生成二维码
export const reqGetQRCode = (orderId) => {
  return request({
    method: "GET",
    url: `/payment/weixin/createNative/${orderId}`,
  });
};
// 获取订单列表
export const reqGetOrderList = ({ page, limit }) => {
  /* 
    请求参数
      page
        页码
      limit
        每页显示数量
  */
  return request({
    method: "GET",
    url: `/order/auth/${page}/${limit}`,
  });
};
