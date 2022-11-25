
//引入页面
import defaultPage from '../pages/defaultPage.vue'
import Login from '../pages/accountPage.vue'
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'
import IndexPage from '../pages/IndexPage.vue'

const routes = [
    {
        path: '/',
        component: defaultPage
    }, {
        path: '/account',
        component: Login,
        children: [
            {
                path: '',
                component: LoginForm
            }, {
                path: 'login',
                component: LoginForm
            },{
                path: 'register',
                component: RegisterForm
            }
        ]
    }, {
        path: '/index',
        component: IndexPage
    }
]

export default routes
