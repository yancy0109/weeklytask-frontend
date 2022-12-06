<template>
  欢迎来到每周任务，在这里可以构架你每周计划，并进行统计



<!--  <button @click="doAccount">点击前往</button>-->
</template>

<script setup>
import router from "../main";


// todo 后期可以用于选择是否登录账号,目前仅支持账号模式

// const doAccount = () => {
/**
 * 中转跳转页面
 */
router.push('/account/login')
// }

</script>

<style scoped>

</style>