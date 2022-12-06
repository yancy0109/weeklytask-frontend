import myAxios from "../plugins/myAxios";

import {setCurrentUserTags} from "../states/tags";

import {Toast} from "vant";
import router from "../main";


/**
 * 更新本地保存用户信息
 * 在 登录 || 对用户自定义Tags操作时调用
 */
const setLocalUserTags = async () => {
    const res = await myAxios.get('/tag/get')
    // @ts-ignore
    if (res.code === 0 && res.data) {
        setCurrentUserTags(res.data);
    } else {
        Toast.fail('系统错误,请重新登录')
        router.push('/')
    }
}

export {
    setLocalUserTags,
}