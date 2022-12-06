<template>
  <van-sidebar id="UserIndex" v-model="active">
    <van-sidebar-item title="用户中心" to="/user/info"/>
    <van-sidebar-item title="标签管理" to="/user/tags"/>
  </van-sidebar>
  <router-view id="UserShow"></router-view>
</template>

<script setup>

import {ref} from "vue";

const active = ref(0);

</script>

<style scoped>
#UserIndex {
  margin: 0px;
}
#UserShow {
  margin: 15px;
}
</style>