<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userName"
          name="昵称"
          label="昵称"
          placeholder="昵称"
          :rules="[{ required: true, message: '请填写昵称' }]"
      />
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
      <van-field
          v-model="checkpassword"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请确认密码' }]"
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
import {inject, ref} from 'vue';
import myAxios from "../plugins/myAxios";
import router from "../main";

const userName = ref('');
const userAccount = ref('')
const userPassword = ref('');
const checkpassword = ref('')

const onSubmit = async () => {
  const res = await myAxios.post("/user/register",{
    userName: userName.value,
    userAccount: userAccount.value,
    userPassword: userPassword.value,
    checkPassword: checkpassword.value
  })
  if (res.code === 0 && res.data) {
    Toast.success('注册成功,请前往登录')
    router.push('/account/login')
  } else {
    Toast.fail(res.message)
  }
};
</script>

<style scoped>

</style>