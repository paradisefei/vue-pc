<template>
  <div>
    <BigCategory />
    <AllCategoryLeft />
  </div>
</template>

<script>
/*
  引入红线上方组件
  红块和详细分类是一个模块
  进入到search组件时，详细列表要等鼠标hover上去时才显示
    用js控制
*/
import BigCategory from "../Home/BigCategory/index.vue";

import AllCategoryLeft from "../Home/AllCategories/AllCategories_left/index.vue";

export default {
  name: "Search",
  components: {
    BigCategory,
    AllCategoryLeft,
  },
};
</script>

<style>
</style>
