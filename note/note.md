https://github.com/xpromise/class0721-vue-pc

```js
<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>

</style>

```

## `day03`

1. 把数据交由`vuex`来管理

   1. `vuex`中的`modules`进行模块化管理

   2. `home`组件中会用到的数据就在`modules`中建一个`home`的文件夹来管理

      1. `modules`文件夹下所有的模块管理最后都导入到`index.js`中，导出一个对象，然后统一的放入`store`中去用

      2. `modules`中管理的数据，在组件中访问也不同

         ```js
             ...mapState({
               categoryList: (state) => state.home.categoryList, // home是modules导出的对象中的属性
             }),
         ```

2. 三级分类列表在`Search`组件中也有效

   1. 一级、二级、三级链接都是可以点的，有三种方式
      1. 每一个都要有一个链接`<router-link>`
      2. 每一个都绑定一个点击事件，在点击事件中改变地址
      3. 事件委托，把所有点击都委托给父级，然后根据事件目标`e.target`进行相应处理
   2. 同时可以绑定自定义事件，起到传参的作用

3. 全部分类列表

   1. 显示隐藏
      1. `Home`组件固定显示
      2. `Search`组件
         1. 鼠标移入显示，鼠标移出是隐藏
         2. 点击商品后隐藏
   2. 下拉的过渡效果
   3. 在有`params`参数时，点击商品，保留`params`参数
      1. 在有query参数时，点击搜索也要保留`params`参数
   4. `TypeNav`在`Home`组件和`Search`组件都有使用，当从`Home`组件跳转到`Search`组件时，又会加载一次，加载了`TypeNav`就会去请求数据
      1. 需求就是在跳转时，就不要去请求数据了
         1. 解决方式就是进行一次判断，有数据的话就直接`return`

4. `mockjs`数据模拟

## `day04`

1. `vue`中使用`swiper`做轮播图

   1. `HTML`基本结构

      ```js
        <div class="swiper-container" ref="swiper">
          <div class="swiper-wrapper">
              <div class="swiper-slide">Slide1</div>
              <div class="swiper-slide">Slide2</div>
              <div class="swiper-slide">Slide3</div>
              <div class="swiper-slide">Slide4</div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
      
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      ```

   2. `js`部分

      1. 下包

         1. 注意，`6.xx`版本的话需要在`github`中找到最新的文档，去到英文官网

      2. 引入组件和使用

         ```js
         import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
         
         Swiper.use([Navigation, Pagination, Autoplay]);
         ```

      3. 初始化`swiper`

         ```js
         new Swiper(this.$refs.swiper, {
             // direction: "vertical", // 垂直切换选项
             loop: true, // 循环模式选项
             autoplay: {
               display: 2000,
               disableOnInteraction: false,
             },
             // 如果需要分页器
             pagination: {
               el: ".swiper-pagination",
               clickable: true,
             },
             // 如果需要前进后退按钮
             navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
             },
           });
         ```

   3. 注意点

      1. 在哪里初始化`swiper`

         1. 分两种情况：本地数据和请求数据
         2. 如果是本地的图片数据渲染在页面上，则在页面挂载成功时就可以进行初始化，因为此时`DOM`结构已经生成且图片数据也已经渲染成功了
         3. 如果是请求的数据，由于请求是异步的，所以在`DOM`结构生成时还拿不到数据，所以不能在`mounted`中直接初始化，不过可以执行可`vm.$nextTick`放在`mounted`中，然后把初始化放在`vm.$nextTick`的回调中
         4. 核心点就是要`DOM`结构生成图片数据成功渲染之后再初始化`swiper`

      2. 同一个页面有多个轮播图时，如果每一次初始化`swiper`时用的都是同一个类名是会出问题的，要保证每一次初始化时都只操作一个容器

         1. 在`vue`的组件化开发中的解决方式就是给容器加一个`ref`属性，这样能确保每一次都只是自己这一个

      3. 在监视属性中不能每次变化都重新初始化，所以在初始化`swiper`时把对象保存到组件上，然后判断只要存在组件实例时就不需要再初始化了

         ```js
           watch: {
             carouselList() {
               // 确保不会new多次
               if (this.swiper) return;
               this.$nextTick(() => {
                 this.initSwiper();
               });
             },
           },
         ```

      4. 如果是请求数据的话，挂载成功时是没有数据的，所以进行判断，如果没有数据时就直接`return`

## `day05`

1. 请求参数的作用
   1. 请求参数是要传到后端去的，后端拿到这些参数进行处理然后得到数据再返回
   2. 有些参数是必须的，有些参数不是必须的
      1. 必选的话就是一定要把该属性放到对象中然后传到后端
   3. 请求参数是放在对象中的，后端能接收哪些参数就是对象的键，键是确定的，需要的话就是给这些键对应的值，但值不是瞎写的
      1. 自己写
      2. 后端给了我选择



## `day06`

封装分页器组件

1. 核心就是需求，大的需求以及每一个小的需求
2. 使用的时候我需要你告诉我我应该显示多少个按钮，那我又要根据我自己的总的数量和每一页要显示的数量来得到我可以显示多少个按钮，这里就需要你告诉我总的数量和每一页应该显示多少条数据，这里就里有的情况
   1. 你让我显示的按钮数量比我能显示的按钮数量多
      1. 这种情况下就直接显示所有能显示的按钮
      2. 两边都没有省略号
   2. 你让我显示的按钮数量和我刚好能显示的数量一样多
      1. 这种情况页直接显示所有能显示的按钮
      2. 两边都没有省略号
   3. 你让我显示的按钮数量比我能显示的数量少
      1. 两边都能出现省略号
      2. 只有一边能出现省略号
      3. 这就要计算中间部分的开始和结束的坐标了
         1. 根据当前页和你让我显示的按钮数量来得到当前页按钮前面显示到哪里，后面显示到哪里
         2. 拿到开始和结束坐标就可以去遍历生成按钮了
            1. 第一个按钮和最后一个按钮不是遍历生成的
            2. 第一个按钮后面和最后一个按钮前面是有省略号的，这个省略号要根据开始位置和结束位置来确定显示隐藏
            3. `v-for`遍历生成时，`expression`不一定要是一个数组，也可以是一个数，每一项的值就是从1开始逐渐递增
            4. 使用对象的方式给每一个按钮添加样式，选中时高亮显示
            5. 