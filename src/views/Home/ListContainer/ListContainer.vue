<template>
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!--banner轮播-->
        <Carousel :carouselList="carouselList"/>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">尚品汇快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[公告]</span>备战开学季 全民半价购数码</li>
            <li><span class="bold">[特惠]</span>备战开学季 全民半价购数码</li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">话费</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">机票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">电影票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">游戏</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">酒店</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">火车票</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">众筹</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">理财</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">礼品卡</span>
          </li>
          <li class="life-item">
            <i class="list-item"></i>
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";

import { mapState, mapActions } from "vuex";

// 引入轮播图组件

import Carousel from "@comps/Carousel/index.vue";

// import { reqGetMockBanner } from "@api/home";

/* 
  轮播图
    第一次加载时还没有banners数据
    当父组件挂载成功时，请求数据，得到的banners是响应式的，就会传入到子组件中，子组件就可以通过props接收到
    props传过来的数据是不是响应式的
    但是如果传过来的数据本身就是响应式的，那这个数据就是响应式的？
*/
export default {
  name: "ListContainer",
  // data() {
  //   return {
  //     carouselList: [],
  //   };
  // },
  computed: {
    ...mapState({
      carouselList: (state) => state.home.carouselList,
    }),
  },
  methods: {
    ...mapActions(["getMockBanner"]),
    // prev() {
    //   console.log(this);
    // },
    // next() {
    //   console.log(this);
    // },
  },
  components: {
    Carousel,
  },
  async mounted() {
  /* 
        1.本地数据，放在mounted中初始化

        先请求资源，再初始化swiper，在mounted中初始化swiper，因为在页面挂载成功时才能找到DOM元素，才能进行初始化
        页面挂载成功-请求数据-拿到数据初始化swiper-更新用户界面，实现轮播
          先拿到数据，这个数据又是响应式的，所以此时会重新更新渲染页面
          数据更新是异步操作，所以要把swipe初始化也变成异步

1.页面基本结构
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      Slide1
      <img src="./images/banner2.jpg" />
    </div>
    <div class="swiper-slide">
      Slide2
      <img src="./images/banner2.jpg" />
    </div>
    <div class="swiper-slide">
      Slide3
      <img src="./images/banner3.jpg" />
    </div>
    <div class="swiper-slide">
      Slide4
      <img src="./images/banner4.jpg" />
    </div>
  </div>
  <!-- 如果需要分页器 -->
  <div class="swiper-pagination"></div>

  <!-- 如果需要导航按钮 -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
2.引入Swiper及需要使用的组件元素
import Swiper, { Pagination, Navigation, Autoplay } from "swiper";
Swiper.use([Pagination, Navigation, Autoplay]);
3.在mounted中
  请求数据
  拿到数据以后再调用
  this.$nextTick(() => {
    // 在回调中进行swiper的初始化： 有DOM元素-把轮播的结构传入到构造函数中初始化
    new Swiper(".swiper-container", {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }),
        

    */
  await this.getMockBanner();
  // // 其中的回调在更新完DOM后触发，且触发一次
  // this.$nextTick(() => {
  //   new Swiper(".swiper-container", {
  //     // direction: "vertical", // 垂直切换选项
  //     loop: true, // 循环模式选项
  //     autoplay: true,
  //     // 如果需要分页器
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //     // 如果需要前进后退按钮
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  // });
  // setTimeout(() => {
  //   new Swiper(".swiper-container", {
  //     // direction: "vertical", // 垂直切换选项
  //     loop: true, // 循环模式选项
  //     autoplay: true,
  //     // 如果需要分页器
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //     // 如果需要前进后退按钮
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  // });
  },
};
</script>
<style lang="less" scoped>
.swiper-container {
  width: 730;
  height: 460px;
}
.list-container {
  width: 1200px;
  margin: 0 auto;

  .sortList {
    height: 464px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 740px;
      height: 100%;
      padding: 5px;
      float: left;
    }

    .right {
      float: left;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .fl {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
          }
        }
      }

      .lifeservices {
        border-right: 1px solid #e4e4e4;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;

        .life-item {
          border-left: 1px solid #e4e4e4;
          border-bottom: 1px solid #e4e4e4;
          margin-right: -1px;
          height: 64px;
          text-align: center;
          position: relative;
          cursor: pointer;
          width: 25%;

          .list-item {
            background-image: url(../images/icons.png);
            width: 61px;
            height: 40px;
            display: block;
          }

          .service-intro {
            line-height: 22px;
            width: 60px;
            display: block;
          }

          &:nth-child(1) {
            .list-item {
              background-position: 0px -5px;
            }
          }

          &:nth-child(2) {
            .list-item {
              background-position: -62px -5px;
            }
          }

          &:nth-child(3) {
            .list-item {
              background-position: -126px -5px;
            }
          }

          &:nth-child(4) {
            .list-item {
              background-position: -190px -5px;
            }
          }

          &:nth-child(5) {
            .list-item {
              background-position: 0px -76px;
            }
          }

          &:nth-child(6) {
            .list-item {
              background-position: -62px -76px;
            }
          }

          &:nth-child(7) {
            .list-item {
              background-position: -126px -76px;
            }
          }

          &:nth-child(8) {
            .list-item {
              background-position: -190px -76px;
            }
          }

          &:nth-child(9) {
            .list-item {
              background-position: 0px -146px;
            }
          }

          &:nth-child(10) {
            .list-item {
              background-position: -62px -146px;
            }
          }

          &:nth-child(11) {
            .list-item {
              background-position: -126px -146px;
            }
          }

          &:nth-child(12) {
            .list-item {
              background-position: -190px -146px;
            }
          }
        }
      }

      .ads {
        margin-top: 5px;

        img {
          opacity: 0.8;
          transition: all 400ms;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>