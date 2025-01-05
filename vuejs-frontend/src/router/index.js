import { createWebHistory, createRouter } from "vue-router";
import Register from "../components/auth/Register.vue";
import Login from "../components/auth/Login.vue";
import Home from "../view/Home.vue";
const routers = [
   {
    path:'/',
    component: Home,
    name: 'Home'
   },
    {
        path:'/register',
        component: Register,
        name: 'Register'    
    },{
        path:'/login',
        component: Login,
        name: 'Login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
});
export default router