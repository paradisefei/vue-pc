<template>
  <div class="home_allCategories_left">
    <ul>
      <li v-for="firstCategory in allCategories" :key="firstCategory.id">
        <a href="#">{{ firstCategory.categoryName }}</a>
        <div class="home_allCategories_left_div">
          <div
            v-for="secondCategory in firstCategory.categoryChild"
            :key="secondCategory.id"
            class="home_allCategories_left_content"
          >
            <h4>{{ secondCategory.categoryName }}</h4>
            <ul class="home_allCategories_left_ul">
              <li
                v-for="thirdCategory in secondCategory.categoryChild"
                :key="thirdCategory.id"
              >
                {{ thirdCategory.categoryName }}
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import reqCategories from "@api/allCategories.js";

import { mapState, mapActions } from "vuex";

export default {
  name: "allCategories_left",
  computed: {
    ...mapState({
      allCategories: (state) => state.home.allCategories,
      testCount: (state) => state.testCount,
    }),
  },
  methods: {
    ...mapActions(["reqCategoriesA"]),
  },
  mounted() {
    this.reqCategoriesA();
  },
};
</script>

<style lang="less" scoped>
/* 商品具体分类 */
.home_allCategories_left {
  width: 210px;
  height: 460px;
  position: relative;
  background: #eeeeee;
  font-size: 14px;
}
/* 全部商品分类竖栏 */
.home_allCategories_left > ul > li {
  padding: 6px 20px;
}
/* 每一个显示隐藏的div */
.home_allCategories_left_div {
  width: 730px;
  height: 460px;
  padding: 15px;
  box-sizing: border-box;
  background: #eeeeee;
  position: absolute;
  left: 215px;
  top: 0px;
  display: none;
}
.home_allCategories_left > ul > li:hover > div {
  display: block;
}
/*
  鼠标hover显示隐藏块-布局
*/
.home_allCategories_left_content {
  display: flex;
  // flex-wrap: wrap;
}
/* 鼠标hover显示隐藏块-h4标题 */
.home_allCategories_left_content h4 {
  width: 100px;
  height: 16px;
  box-sizing: border-box;
  vertical-align: top;
  padding-right: 15px;
  text-align: right;
}
/* 鼠标hover显示隐藏块-ul列表
    flex布局，左边盒子给了宽度，单行文本；右边盒子没给宽度，当出现多行文本时，左边盒子的宽度就无效了
    容器宽度730，左边盒子80，当右边盒子宽度小于650时，左边盒子宽度有效；当右边盒子宽度大于650时，且没有设置换行时
    flex布局默认情况下如果宽度大了就会压缩盒子自身而不会换行，如果设置了换行就会根据盒子本身来进行换行
*/
.home_allCategories_left_content ul {
  width: 600px;
  display: flex;
  flex-wrap: wrap;
}
.home_allCategories_left_content ul li {
  padding: 0 15px 3px;
  margin-bottom: 5px;
  color: #666;
  border-left: 1px solid #ccc;
}
</style>
