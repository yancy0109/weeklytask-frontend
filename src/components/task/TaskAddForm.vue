<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="task.taskName"
          name="任务名称"
          label="任务名称"
          placeholder="任务名称"
          :rules="[{ required: true, message: '请填写任务名称' }]"
      />
      <van-field
          v-model="task.taskDescription"
          name="任务描述"
          label="任务描述"
          placeholder="任务描述"
          :rules="[{ required: true, message: '请填写任务描述' }]"
      />
      <van-field
          v-model="result"
          is-link
          readonly
          name="datePicker"
          label="时间选择"
          placeholder="点击选择时间"
          @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="top" style="z-index: 999;">
        <van-date-picker
            v-model="currentDate"
            title="选择年月"
            :min-date="minDate"
            :max-date="maxDate"
            :columns-type="columnsType"
            @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>
      <van-field
          v-model="task.tags"
          name="任务标签"
          label="任务标签"
          placeholder="任务标签"
          :rules="[{ required: true, message: '请填写任务标签' }]"
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
import myAxios from "../../plugins/myAxios";
import router from "../../main";

const task = ref({});

const result = ref('');
const showPicker = ref(false);
const onConfirm = ({ selectedValues }) => {
  result.value = selectedValues.join('/');
  showPicker.value = false;
};
const minDate = ref()
const maxDate = ref()
const columnsType = ['year', 'month','day'];

const onSubmit = async () => {
  const res = await myAxios.post("/task/add",task.value)
  if (res.code === 0) {
    Toast.success('添加成功')
    await router.push('/index')
  } else {
    Toast.fail('添加失败')
    await router.push('/index')
  }
};
</script>

<style scoped>

</style>