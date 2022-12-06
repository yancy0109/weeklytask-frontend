
//引入页面
import defaultPage from '../pages/defaultPage.vue'
import accountPage from '../pages/accountPage.vue'
import LoginForm from '../components/account/LoginForm.vue'
import RegisterForm from '../components/account/RegisterForm.vue'
import IndexPage from '../pages/IndexPage.vue'
import UserPage from '../pages/UserPage.vue'
import TagsInfo from '../components/user/TagsInfo.vue'
import UserInfo from '../components/user/UserInfo.vue'

const routes = [
    {
        path: '/',
        component: defaultPage
    }, {
        path: '/account',
        component: accountPage,
        children: [
            { path : '',         component: LoginForm },
            { path : 'login',    component: LoginForm },
            { path : 'register', component: RegisterForm}
        ]
    }, {
        path: '/index',
        component: IndexPage
    }, {
        path: '/user',
        component: UserPage,
        children: [
            { path : '',        component: UserInfo },
            { path : 'info',    component: UserInfo },
            { path : 'tags',    component: TagsInfo }
        ]
    }
]

export default routes
