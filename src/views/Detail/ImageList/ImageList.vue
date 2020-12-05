<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in carouselList"
        :key="carousel.id"
        @click="setCarouselImgIndex(index)"
      >
        <img :src="carousel.imgUrl" />
      </div>
      <!-- <div class="swiper-slide">
        <img src="../images/s1.png" />
      </div>
      <div class="swiper-slide">
        <img src="../images/s2.png" />
      </div> -->
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
/*
    轮播图
      静态渲染
        图片列表，数组传进来，遍历生成每一个slide
*/
import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);
export default {
  name: "ImageList",
  props: {
    carouselList: Array,
    setCarouselImgIndex: Function,
  },
  watch: {
    carouselList() {
      /* 
        一开始没有请求数据的时候传进来的是一个空数组
        请求了数据之后传进来正常的有数据的数据，所以当监视到变化时就可以来初始化swiper了
        点击下一页，跳5张图片
      */
      this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          slidesPerView: 5,
          spaceBetween: 30,
          slidesPerGroup: 5,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>