<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="eachCarousel in carouselList"
        :key="eachCarousel.id"
      >
        <img :src="eachCarousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
/* 
    封装轮播图公共组件
    carouselList数据是父组件中传过来的
*/
// import Vue from "vue";

import Swiper, { Pagination, Navigation, Autoplay } from "swiper";

Swiper.use([Pagination, Navigation, Autoplay]);

export default {
  name: "Carousel",
  props: {
    carouselList: Array,
  },
  methods: {
    initSwiper() {
      // 回调函数在界面更新之后执行
      // 必须在轮播列表界面显示之后创建
      this.swiper = new Swiper(this.$refs.swiper, {
        // 可以, 只会匹配, 当前组件中的对应元素
        // direction: 'vertical', // 垂直切换选项   默认是水平轮播
        loop: true, // 循环模式
        autoplay: true,
        // 分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  watch: {
    // 监视carouselList  一般监视就可以
    carouselList: {
      handler() {
        // 说明carouselList状态数据发了改变, 但界面还没有更新
        // 只有数组中有数据, 才需要创建swiper对象
        if (this.swiper) return;

        // console.log("watch carouselList", this.carouselList.length); // 执行3次行
        /* 
        数据绑定流程 ==> 更新状态数据  ==> 同步调用监视的回调函数 ==> 界面就会自动 `异步`更新
        */
        // vm.$nextTick( [callback] )
        // 将回调延迟到下次 DOM 更新循环(更新界面)之后执行。$nextTick()在修改数据之后立即调用，然后等待 DOM 更新
        // this.$nextTick(() => {// 回调函数在界面更新之后执行
        this.$nextTick(() => {
          this.initSwiper();
        });
      },
      immediate: false, // 在初始显示时就立即执行一次, 默认是false(只有数据改变才立即执行)
    },
  },
  mounted() {
    /* 
        1.在banner中的轮播图
            一开始加载Carousel组件时没有数据
            在页面挂载成功时得到数据，重新渲染页面把数据传入Carousel中
            触发监视属性的执行，初始化Swiper
        1.在floor中的轮播图
            一开始没有请求到数据，所以不会渲染Floor组件
            在页面挂载成功请求到数据时，就会渲染Floor组件并把数据传入到对应的组件中
    */
    // 过滤banner中轮播图的情况
    if (!this.carouselList.length) return;
    this.initSwiper();
  },
};
</script>

<style lang="less" scoped>
</style>