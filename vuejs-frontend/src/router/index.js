import { createWebHistory, createRouter } from "vue-router";
import Register from "../components/auth/Register.vue";
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
});
export default router