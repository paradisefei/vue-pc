<template>
  <div class="home">
    <!-- 红线上的大类分类 -->
    <BigCategory />
    <!-- 轮播图这一整行 -->
    <AllCategories />
  </div>
</template>

<script>
/*
   1.划分组件
      红线上方
      轮播图这一整行
        左边商品详情
        轮播图
        右边快报
      今日推荐
      热卖
*/
import BigCategory from "./BigCategory/index.vue";

import AllCategories from "./AllCategories/index.vue";

export default {
  name: "Home",
  components: {
    BigCategory,
    AllCategories,
  },
};
</script>

<style>
</style>
