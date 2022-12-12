<template>
  <div id="LoginView" >
    <!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 -->
    <van-notice-bar
        :scrollable="false"
        text="今天有完成你的任务吗"
    />
    <router-view></router-view>
    <van-button round type="success" si ze="normal" @click="doResigterDialog" block>还没有注册？加入我们！</van-button>
    </div>
</template>

<script setup>
import {Dialog, Toast} from "vant";
import { ref} from "vue";

import router from "../main";

/**
 * 1 代表处于登录页面
 * 2 代表修改为注册页面
 * */
const viewFor = ref(1)

const doResigterDialog = () => {
  Dialog.confirm({
    title: '请问要前往注册吗',
    message:
        '规划你的一周，指定个人计划',
  })
      .then(() => {
        // Toast.success('正在前往注册')
        router.push('/account/register')
      })
      .catch(() => {
        Toast.success('取消注册')
      });
}
</script>

<style scoped>

#LoginView {
  position: absolute;
  top: 25%;
  left: 30%;
  height: 50%;
  height: 60%;
}
</style>