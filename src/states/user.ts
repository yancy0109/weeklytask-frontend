import {ref} from "vue";
import {UserType} from "../mdels/user";

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