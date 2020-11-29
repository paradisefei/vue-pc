<template>
  <!-- 红线上的大类分类 -->
  <div class="home_bigCategory">
    <ul>
      <li>全部商品分类</li>
      <li v-for="eachCategory in bigCategory" :key="eachCategory.id">
        <router-link :to="eachCategory.path">
          {{ eachCategory.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BigCategory",
  data() {
    return {
      bigCategory: [
        {
          id: 1,
          path: "#",
          name: "服装城",
        },
        {
          id: 2,
          path: "#",
          name: "美妆馆",
        },
        {
          id: 3,
          path: "#",
          name: "尚品汇超市",
        },
        {
          id: 4,
          path: "#",
          name: "全球购",
        },
        {
          id: 5,
          path: "#",
          name: "闪购",
        },
        {
          id: 6,
          path: "#",
          name: "团购",
        },
        {
          id: 7,
          path: "#",
          name: "有趣",
        },
        {
          id: 8,
          path: "#",
          name: "秒杀",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home_bigCategory {
  border-bottom: 3px solid red;
}

.home_bigCategory ul {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}

.home_bigCategory ul li {
  padding: 15px 30px;
}

.home_bigCategory ul li:first-child {
  width: 210px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  padding: 0;
  background: #e1251b;
  color: white;
  font-size: 14px;
}
</style>
