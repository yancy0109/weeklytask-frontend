<template>
  <div id="taskcardLists">
    <van-card v-for="task in listData"
        num="2"
        :price="task.finishTime"
        :desc="task.taskDescription"
        :title="task.taskName"
    >
      <template #tags>
        <van-tag v-for="tag in task.taskTag.toString().split(',')" plain type="primary"> {{tag}}</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">点击完成</van-button>
        <van-button size="mini">点击删除</van-button>
      </template>
    </van-card>
    <van-popup
        v-model:show="show"
        round
        position="bottom"
        :style="{ height: '45%'}"
    >
      <TaskAddForm />
    </van-popup>
    <van-button type="primary" @click="show = true">主要按钮</van-button>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import myAxios from "../../plugins/myAxios";
import {Toast} from "vant";
import TaskAddForm from "./TaskAddForm.vue";
// 显示数据
const listData = ref([])

// Dialog显示
const show = ref(false);

/**
 * 加载用户所有任务，按照结束时间升序排序
 * @returns {Promise<void>}
 */
const loadTaskList = async () => {
  const data = await myAxios.get("/task/list")
  if (data?.code !== 0){
    Toast.fail('加载用户任务列表失败')
  }
  listData.value = data.data
  Toast.success('加载用户任务列表成功')
}

/**
 * 添加用户任务
 * @returns {Promise<void>}
 */
const addTask = async () => {

}


onMounted(() => {
  loadTaskList()
})
</script>

<style scoped>

</style>