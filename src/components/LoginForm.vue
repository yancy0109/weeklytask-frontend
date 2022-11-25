<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="账号"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup>
import {Toast} from "vant";
import { ref } from 'vue';
import myAxios from "../plugins/myAxios";
import {setLocalUserInfo} from "../service/user";
import router from "../main";

const userAccount = ref('');

const userPassword = ref('');

const onSubmit = async () => {
  const res = await myAxios.post("/user/login",{
    userAccount: userAccount.value,
    userPassword: userPassword.value,
  })
  if (res.code === 0 && res.data) {
    Toast.success('登录成功')
    setLocalUserInfo()
    router.push('/index')
  } else {
    Toast.fail('登录失败')
    password.value = ''
  }
};
</script>

<style scoped>

</style>