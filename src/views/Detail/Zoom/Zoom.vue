<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" @mousemove="handleMask"></div>
    <div class="big">
      <img :src="imgUrl" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
/*
  每次页面加载上来时，中图默认显示的就是数组中的第一张图片
  我点击某一张图片，中图和大图中就显示哪一张图片
  所以这个组件中两个显示图片的位置显示的是同一张图片，所以只需要把图片地址传进来就行
  默认情况下是第一张图片

  放大镜效果
    鼠标所在位置就是蒙版的中心
    给event鼠标移入事件
*/
export default {
  name: "Zoom",
  props: {
    imgUrl: {
      type: String,
    },
  },
  methods: {
    // 处理蒙版移动
    handleMask(e) {
      /* 
        1.拿到鼠标的位置
        2.根据鼠标的位置确定蒙版的坐标
          设置DOM元素的样式
      */
      let x = e.offsetX - 100;
      let y = e.offsetY - 100;

      if (x <= 0) {
        x = 0;
      }
      if (x >= 200) {
        x = 200;
      }
      if (y <= 0) {
        y = 0;
      }
      if (y >= 200) {
        y = 200;
      }

      this.$refs.mask.style.left = x + "px";
      this.$refs.mask.style.top = y + "px";
      
      this.$refs.bigImg.style.left = -2 * x + "px";
      this.$refs.bigImg.style.top = -2 * y + "px";
    },
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>