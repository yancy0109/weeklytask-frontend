<template>
  <div>
    <el-avatar :size="150" :src="user.userAvatar" />
  </div>
  <van-cell title="昵称" :value="user.userName" />
  <van-cell title="账号" :value="user.userAccount" />
  <van-cell title="性别"  :value="user.gender"/>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../../states/user";
import {Toast} from "vant";
import {setLocalUserInfo} from "../../service/user";
import router from "../../main";

const user  = ref({
  // userName : '',
  // userAccount : '',
  // userAvatar : '',
  // gender : '',
})


onMounted(async () => {
  // 获取当前用户信息
  const userInfo = await getCurrentUser()
  console.log('userinfo' + userInfo)
  if (userInfo){
    user.value = userInfo
    Toast.success('成功获取用户信息')
  } else {
    Toast.fail('获取用户信息失败')
    // 尝试一次重新获取设置用户信息
    await setLocalUserInfo()
    const userInfo = await getCurrentUser()
    if (userInfo) {
      user.value = userInfo
      Toast.success('成功获取用户信息')
    } else {
      Toast.fail('获取失败,请重新登录')
      router.push('/')
    }
  }

})

</script>

<style>

</style>
