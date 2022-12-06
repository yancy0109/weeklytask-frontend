<template>
  <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
  >
    <van-cell v-for=" item in userTags?.tags " :key="item" :title="item">
      <van-button @click="doDelete(item)" type="danger">删除</van-button>
    </van-cell>
  </van-list>

  <!-- 可以使用 CellGroup 作为容器 -->
  <van-cell-group inset>
    <van-field v-model="addTagName" label="任务标签" placeholder="请输入标签名" >
    </van-field>

    <van-button @click="doAdd" type="primary">添加</van-button>
  </van-cell-group>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {getCurrentUserTags} from "../../states/tags";
import {Toast} from "_vant@3.6.6@vant";
import router from "../../main";
import myAxios from "../../plugins/myAxios";
import {setLocalUserTags} from "../../service/tags";

const userTags = ref()
const loading = ref(false);
const finished = ref(false);

const addTagName = ref('')

const loadData  = async () => {
  // 获取当前用户Tags
  let userLocalTags  = await getCurrentUserTags()
  if (userLocalTags){
    userTags.value = userLocalTags
    Toast.success('成功获取用户标签信息')
    loading.value = false
    finished.value = true
  } else {
    Toast.fail('获取用户标签信息失败')
    // router.push('/')
  }
}

onMounted(async () => {
  await loadData()
})

const doDelete = async (tagName) => {
  const res = await myAxios.post('/tag/delete', {
    tagName : tagName,
  })
  if (res && res.code === 0) {
    await setLocalUserTags()
    await loadData()
    Toast.success('删除成功')
  } else {
    Toast.success('删除失败')
  }
}

const doAdd = async () => {
  const res = await myAxios.post('/tag/add', {
    tagName : addTagName.value,
  })
  if (res && res.code === 0) {
    await setLocalUserTags()
    await loadData()
    Toast.success('添加成功')
  } else {
    Toast.success('添加失败')
  }
}
</script>

<style scoped>

</style>