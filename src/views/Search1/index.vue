<template>
  <div><TypeNav /></div>
</template>

<script>
import TypeNav from "@comps/TypeNav";

/* 
  Home组件和Search组件都会需要TypeNav组件，所以当从Home组件跳到Search时会再一次去执行TypeNav中的代码然后进行请求
*/
export default {
  name: "Search",
  components: {
    TypeNav,
  },
  mounted() {
    /* 
      加载Search组件时，如果
    */
  },

};
</script>

<style lang="less" scoped>
</style>
