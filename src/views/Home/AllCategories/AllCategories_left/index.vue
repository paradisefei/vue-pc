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
import reqCategories from "@api/allCategories.js";

export default {
  name: "allCategories_left",
  data() {
    return {
      allCategories: [],
    };
  },
  async mounted() {
    /*
      页面挂载成功了之后得到allCategories的数据，由于是具有响应式的，所以就会渲染上去
    */
    this.allCategories = await reqCategories();
    this.allCategories = this.allCategories.slice(0, 15);
    console.log(this.allCategories);
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
}
/* 鼠标hover显示隐藏块-h4标题 */
.home_allCategories_left_content h4 {
  width: 80px;
  height: 16px;
  vertical-align: top;
  padding-right: 10px;
  text-align: right;
}
/* 鼠标hover显示隐藏块-ul列表 */
.home_allCategories_left_content ul {
  display: flex;
  flex-wrap: wrap;
}
.home_allCategories_left_content ul li {
  padding: 0 10px;
  margin-bottom: 5px;
  border-left: 1px solid black;
}
</style>
