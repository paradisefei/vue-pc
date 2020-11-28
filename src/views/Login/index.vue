<template>
  <div>
    Login..
    <el-button type="primary" @click="login">按钮</el-button>
  </div>
</template>

<script>
import reqLogin from "@api/users.js";

export default {
  name: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "11111");
    },
  },
};
</script>

<style>
</style>
