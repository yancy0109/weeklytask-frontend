<template>

  <div id="content">
    <router-view></router-view>
  </div>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="search" to="/index">任务列表</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/index">本周</van-tabbar-item>
    <van-tabbar-item to="/user" icon="home-o">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import {ref} from "vue";

const active = ref(0)

</script>

<style scoped>
#content {
  width: 786px;
  height: 406px;
}
</style>