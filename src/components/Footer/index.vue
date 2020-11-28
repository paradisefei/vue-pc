<template>
  <footer>
    <div class="footer_top" v-show="isShow">
      <dl v-for="eachDl in other_service" :key="eachDl.id">
        <dt>{{ eachDl.dt }}</dt>
        <dd v-for="eachDd in eachDl.dd" :key="eachDd.id">
          <router-link :to="eachDd.path">
            {{ eachDd.name }}
          </router-link>
        </dd>
      </dl>
      <dl>
        <dt>帮助中心</dt>
        <dd>
          <img src="../../images/wx_cz.jpg" />
        </dd>
      </dl>
    </div>
    <div class="footer_bottom">
      <ul>
        <li v-for="eachLink in bottom_link" :key="eachLink.id">
          <router-link :to="eachLink.path">
            {{ eachLink.name }}
          </router-link>
        </li>
      </ul>
      <p>地址：北京市昌平区宏福科技园综合楼6层</p>
      <p>京ICP备19006430号</p>
    </div>
  </footer>
</template>

<script>
/*
  动态数据
    5个dl
    每个dl都有一个dt
    每个dl有好几个dd
      每一个dd中都有新的地址
  登录页面没有top，就是说有些页面有，有些页面没有
    根据页面自己传入参数，确定有什么东西
    父组件向子组件传参数
    首页都有
*/
export default {
  name: "Footer",
  data() {
    return {
      isShow: true,
      other_service: [
        {
          id: 1,
          dt: "购物指南",
          dd: [
            {
              id: 1 - 1,
              path: "/search",
              name: "会员介绍",
            },
            {
              id: 1 - 2,
              path: "/register",
              name: "生活旅行",
            },
            {
              id: 1 - 3,
              path: "#",
              name: "常见问题",
            },
            {
              id: 1 - 4,
              path: "#",
              name: "购物指南",
            },
          ],
        },
        {
          id: 2,
          dt: "配送方式",
          dd: [
            {
              id: 2 - 1,
              path: "#",
              name: "上门自提",
            },
            {
              id: 2 - 2,
              path: "#",
              name: "211限时达",
            },
            {
              id: 2 - 3,
              path: "#",
              name: "配送服务查询",
            },
            {
              id: 2 - 4,
              path: "#",
              name: "配送费收取标准",
            },
            {
              id: 2 - 5,
              path: "#",
              name: "海外配送",
            },
          ],
        },
        {
          id: 3,
          dt: "支付方式",
          dd: [
            {
              id: 3 - 1,
              path: "#",
              name: "货到付款",
            },
            {
              id: 3 - 2,
              path: "#",
              name: "在线支付",
            },
            {
              id: 3 - 3,
              path: "#",
              name: "分期付款",
            },
            {
              id: 3 - 4,
              path: "#",
              name: "邮局汇款",
            },
            {
              id: 3 - 5,
              path: "#",
              name: "公司转账",
            },
          ],
        },
        {
          id: 4,
          dt: "售后服务",
          dd: [
            {
              id: 4 - 1,
              path: "#",
              name: "售后政策",
            },
            {
              id: 4 - 2,
              path: "#",
              name: "价格保护",
            },
            {
              id: 4 - 3,
              path: "#",
              name: "退款说明",
            },
            {
              id: 4 - 4,
              path: "#",
              name: "返修/退换货",
            },
            {
              id: 4 - 5,
              path: "#",
              name: "取消订单",
            },
          ],
        },
        {
          id: 5,
          dt: "特色服务",
          dd: [
            {
              id: 5 - 1,
              path: "#",
              name: "夺宝岛",
            },
            {
              id: 5 - 2,
              path: "#",
              name: "DIY装机",
            },
            {
              id: 5 - 3,
              path: "#",
              name: "延保服务",
            },
            {
              id: 5 - 4,
              path: "#",
              name: "尚品汇E卡",
            },
            {
              id: 5 - 5,
              path: "#",
              name: "尚品汇通信",
            },
          ],
        },
      ],
      bottom_link: [
        {
          id: 1,
          path: "#",
          name: "关于我们",
        },
        {
          id: 2,
          path: "#",
          name: "联系我们",
        },
        {
          id: 3,
          path: "#",
          name: "商家入驻",
        },
        {
          id: 4,
          path: "#",
          name: "营销中心",
        },
        {
          id: 5,
          path: "#",
          name: "友情链接",
        },
        {
          id: 6,
          path: "#",
          name: "关于我们",
        },
        {
          id: 7,
          path: "#",
          name: "商家入驻",
        },
        {
          id: 8,
          path: "#",
          name: "营销中心",
        },
        {
          id: 9,
          path: "#",
          name: "友情链接",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
footer {
  background: #eaeaea;
  padding: 20px 0;
  font-size: 14px;
}
footer a {
  text-decoration: none;
  color: #444;
}
footer a:hover {
  color: red;
}
.footer_top {
  width: 1200px;
  margin: 0 auto;

  padding-bottom: 20px;
  border-bottom: 1px solid #e4e1e1;

  display: flex;
  justify-content: space-between;
}

.footer_top dt {
  font-weight: bold;
  font-size: 18px;
}
.footer_top dd {
  margin-top: 10px;
}
.footer_top img {
  height: 90px;
}
.footer_bottom {
  width: 1200px;
  margin: 20px auto;
  text-align: center;
}
.footer_bottom ul {
  list-style: none;
  display: flex;
  justify-content: center;
  text-align: center;
}
.footer_bottom ul li {
  padding: 5px 10px;
  border-right: 1px solid #ccc;
}
.footer_bottom ul li:last-child {
  border-right: 0px;
}
.footer_bottom p {
  margin-top: 10px;
}
</style>
