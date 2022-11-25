import myAxios from "../plugins/myAxios";

import {setCurrentUser} from "../states/user";

import {Toast} from "vant";
import router from "../main";

const setLocalUserInfo = async () => {
    const res = await myAxios.get('/user/get/login')
    // @ts-ignore
    if (res.code === 0 && res.data) {
        setCurrentUser(res.data);

    } else {
        Toast.fail('系统错误,请重新登录')
        router.push('/')
    }
}

export {
    setLocalUserInfo
}