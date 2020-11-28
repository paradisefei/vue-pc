<template>
  <div>
    Login..
    <button @click="login">按钮</button>
  </div>
</template>

<script>
import reqLogin from "@api/users.js";

export default {
  name: "Login",
  methods: {
    login() {
      reqLogin("13700000000", "111111");
    },
  },
};
</script>

<style>
</style>
