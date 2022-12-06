import {UserTagsType} from "../models/usertags";
import {setLocalUserTags} from "../service/tags";
import {Toast} from "_vant@3.6.6@vant";
import router from "../main";

let currentUserTags : UserTagsType;
const setCurrentUserTags = (data : UserTagsType) => {
    if (!data) {
        Toast.fail('获取标签信息失败,请重新登录')
        router.push('/')
    }
    currentUserTags = data
}

const getCurrentUserTags = () => {
    if (currentUserTags) {
        // 尝试一次重新获取设置用户信息
        setLocalUserTags()
    }
    if (!currentUserTags) {
        router.push('/')
    }
    return currentUserTags;
}

export {
    setCurrentUserTags,
    getCurrentUserTags
}