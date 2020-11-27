<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>
<script>
/*
  公共组件
  路由组件
*/
import Header from "./components/Header/index.vue";

import Footer from "./components/Footer/index.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
<style></style>
