<template>
  <div class="home_allCategories_left">
    <ul class="home_allCategories_left_hover">
      <li>
        全部商品分类
        <ul class="home_allCategories_left_item">
          <li v-for="firstCategory in allCategories" :key="firstCategory.id">
            <a href="#">{{ firstCategory.categoryName }}</a>
            <!-- <a @click="goSearch">{{ firstCategory.categoryName }}</a> -->
            <!-- <router-link
          :to="`/search?categoryName=${firstCategory
          .categoryName}&category1Id=${firstCategory.categoryId}`"
          >{{ firstCategory.categoryName }}</router-link -->
            <!-- > -->
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
      </li>
    </ul>
  </div>
</template>

<script>
/*
  点击跳转到search组件
  search组件中有红线上方的组件和所有分类组件
  点击修改地址栏地址
    查询字符串
      categoryName
      category2Id
    鼠标放在全部商品分类上出现列表
      将全部分类商品组件引入到search组件中
      在Home组件中是直接显示的
      在Search组件中是hover显示的
*/

import { mapState, mapActions } from "vuex";

export default {
  name: "allCategories_left",
  data() {
    return {
      showAllCategories: false,
    };
  },
  computed: {
    ...mapState({
      allCategories: (state) => state.home.allCategories,
      testCount: (state) => state.testCount,
    }),
  },
  methods: {
    ...mapActions(["reqCategoriesA"]),
    //   goSearch() {
    //     this.$router.push({
    //       name: "search",
    //       query
    //     })
    //   }
    // 鼠标放在全部商品分类上才显示下面的具体列表内容
    showAllCategoriesenter() {
      this.showAllCategories = true;
      console.log(this.showAllCategories);
    },
    showAllCategoriesout() {
      this.showAllCategories = false;
      console.log(this.showAllCategories);
    },
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
  // height: auto;
  position: relative;
  // background: #eeeeee;
  font-size: 14px;
  top: -56px;
}
/* 全部商品分类竖栏 */
// .home_allCategories_left_hover > ul > li {
//   padding: 5px 20px 0;
// }
.home_allCategories_left_hover > li:first-child {
  background: #e1251b;
  height: 38px;
  line-height: 38px;
  color: white;
  text-align: center;
  padding: 6px 20px;
}
.home_allCategories_left_item > li {
  color: black;
  height: auto;
  line-height: 16px;
  text-align: left;
  padding-top: 10px;
  display: none;
}
.home_allCategories_left_hover > li:first-child:hover > ul > li {
  display: block;
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
  top: 56px;
  display: none;
}
.home_allCategories_left_item > li:hover > div {
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
