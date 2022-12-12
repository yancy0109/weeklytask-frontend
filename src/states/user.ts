import {ref} from "vue";
import {UserType} from "../models/user/user";

let currentUser : UserType

const setCurrentUser = (user : UserType) => {
    currentUser = user
}

const getCurrentUser = () => {
    return currentUser
}

export {
    setCurrentUser,
    getCurrentUser
}