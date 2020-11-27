<template>
  <header>
    <div class="header_top">
      <div class="header_top_warpper">
        <div class="header_top_left">
          <span>尚品汇欢迎您!</span>
          <router-link to="/login">请登录</router-link>
          <router-link to="/register">免费注册</router-link>
        </div>
        <ul class="header_top_right">
          <li><a href="#">我的订单</a></li>
          <li><a href="#">我的购物车</a></li>
          <li><a href="#">我的尚品汇</a></li>
          <li><a href="#">尚品汇会员</a></li>
          <li><a href="#">企业采购</a></li>
          <li><a href="#">关注尚品汇</a></li>
          <li><a href="#">合作招商</a></li>
          <li><a href="#">商家后台</a></li>
        </ul>
      </div>
    </div>
    <div class="header_bottom">
      <router-link to="/home"
        ><img src="../../images/Logo.png" class="header_bottom_img"
      /></router-link>
      <div class="header_bottom_search">
        <input />
          <button @click="search">搜索</button>
      </div>
    </div>
  </header>
</template>

<script>
/*
  header结构
  点击登录，改变地址
*/
export default {
  name: "Header",
  methods: {
    search() {
      this.$router.push("/search");
    },
  },
};
</script>

<style lang="less" scoped>
header a {
  text-decoration: none;
  color: #333333;
}
header a:hover {
  color: red;
}
.header_top {
  width: 100%;
  padding: 5px 0px;
  background: #eaeaea;
  display: flex;
}
.header_top_warpper {
  width: 1200px;
  margin: 0 auto;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  min-width: 1200px;
  // padding: 10px 0;
}
.header_top_left {
  padding: 5px 0px;
}
.header_top_left a {
  margin-left: 20px;
  text-align: center;
}
.header_top_right {
  list-style: none;
  display: flex;
}
.header_top_right li {
  padding: 5px 10px;
  border-right: 1px solid #ccc;
}
.header_top_right li:last-child {
  border-right: 0px;
}

// 头部的logo一块
.header_bottom {
  width: 1200px;
  margin: 0 auto;
  padding: 10px 0px;

  display: flex;
  justify-content: space-between;
}
.header_bottom_search {
  height: 56px;
  line-height: 56px;
}
.header_bottom_img {
  cursor: pointer;
}
.header_bottom_search input {
  width: 500px;
  height: 32px;
  padding: 0px;
  border: 2px solid red;
  border-right: 0;
  outline: none;
  box-sizing: border-box;
  border-radius: 5px 0 0 5px;
}
.header_bottom_search button {
  background: red;
  width: 68px;
  height: 32px;
  border: 0;
  border-radius: 0 5px 5px 0;
}
.header_bottom_search button:hover {
  cursor: pointer;
}
</style>
