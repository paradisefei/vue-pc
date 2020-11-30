<template>
  <div class="home_allCategories_center">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/banner1.jpg" /></div>
        <div class="swiper-slide"><img src="./images/banner2.jpg" /></div>
        <div class="swiper-slide"><img src="./images/banner3.jpg" /></div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
/*
  在项目中成功的用上swiper中的轮播图
    1.下包
    2.安装插件
    3.引入HTML内容
    4.给swiper定义一个大小
    5.初始化swiper

  图片渲染出来了但是无法轮播
 */
import Swiper from "swiper";

import "swiper/swiper-bundle.css";

export default {
  name: "center",
  mounted() {
    /* eslint-disable no-new */
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      // 如果需要滚动条
      scrollbar: ".swiper-scrollbar",
    });
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  width: 730px;
  height: 460px;
}
</style>
