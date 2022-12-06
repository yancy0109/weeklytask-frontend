import { createApp } from 'vue'
import App from './App.vue'
import './samples/node-api'
import * as VueRouter from "vue-router"
import routes from "./config/router";

// 引入Vant相关
import Vant from 'vant'
import 'vant/lib/index.css';

// 引入Element-UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);

// 产检
const router = VueRouter.createRouter({
    // 内部提供了 history 模式的实现 为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});
export default router

app.use(router)
app.use(Vant);
app.use(ElementPlus);

app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })

