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
        <form action="###">
          <input v-model="searchText" />
          <button @click.prevent="search">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
/*
  header结构
  点击登录，改变地址

  2.搜索框
    点击按钮进行搜索，文本框内容作为路由参数
    当文本为空时，同样要路由显示search
    当文本为空时，search后没有斜杠
*/
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    /*
      点击按钮进行搜索
        1.将整个路径拼成一个字符串来传入
        2.使用命名路由
    */
    // search() {
    //   const { searchText } = this;
    //   const location = searchText ? `/${searchText}` : "";
    //   this.$router.push(`/search${location}`);
    // },
    search() {
      /*
        使用命名路由传参时是用一个对象传入的
          1.没有路由参数时，路径上没有/search部分，但是会加载search组件；有路由参数时，路径上就会有/search部分
            要在没有路由参数时也要有/search
      */
      const { searchText } = this;
      // const location = searchText ? `/${searchText}` : "";
      const location = {
        name: "search",
        // params: {
        //   searchText,
        // },
        query: {
          name: "zs",
          age: 18,
        },
      };
      if (searchText) {
        location.params = {
          searchText,
        };
      }
      /*
        1.push方法会返回一个promise
        2.第二个参数处理成功，第三个参数处理失败
        3.没有传第二个参数和第三个参数时，无法处理
        4.重复跳转到一个地址，会报错
      */
      this.$router.push(
        location,
        (res) => {
          console.log(res);
        },
        () => {
          console.log("hello");
        },
      );
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
