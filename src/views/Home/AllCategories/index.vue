<template>
  <div class="home_allCategories">
    <AllCategoriesLeft />
    <div class="home_allCategories_center"></div>
    <div class="home_allCategories_right"></div>
  </div>
</template>

<script>
/*
  1.请求数据
    数据请求在api中进行
  布局
    div是整个板
      每个标题是h5
      下面跟的是一个列表ul
      h5和ul使用flex布局
      每个h5都在一条竖线上
  鼠标hover上去以后显示对应的div
*/

import AllCategoriesLeft from "./AllCategories_left/index.vue";

export default {
  name: "allCategories",
  data() {
    return {
      allCategories: [],
    };
  },
  components: {
    AllCategoriesLeft,
  },
};
</script>

<style lang="less" scoped>
/* 轮播图这一整行 */
.home_allCategories {
  width: 1200px;
  margin: 5px auto;

  display: flex;
  justify-content: space-between;
}
/* 轮播图 */
.home_allCategories_center {
  width: 730px;
  height: 460px;
  background: green;
}

/* 快报 */
.home_allCategories_right {
  width: 250px;
  height: 460px;
  background: pink;
}
</style>
