import Vue from "vue";
import VueRouter from "vue-router";
import  axois  from "axios";

Vue.use(VueRouter)


const Home = ()=>import('@/pages/Home.vue')
const Signup = ()=>import('@/pages/Signup.vue')
const Notfound = ()=>import('@/pages/Notfound.vue')

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {path: '/', component: Home,redirect:'/signup'},
        {path: '/signup', component: Signup},
        {path: '/notfound', component: Notfound},
        {path: '/*', redirect:'/notfound'}
    ]
})

let config = {
    headers:{
        Authorization : `Bearer xxxxxx`
    }
}
let parmas = {

}


// 用于鉴权是不是有资格进入 /signup 页面
const getCri = () => {
    return axois.get('../data.json',{...config, ...parmas,})
    .then(res => {
        console.log('res', res)
        if(res.data && res.status >= 200 &&res.status < 300){
            return res.data
        }
    })
}

// 导航守卫（路由守卫

router.beforeEach(async (to, from, next) => {
    if(to.path == '/signup'){
       let res = await getCri()
        if(res.code == 200 && res.data && res.data.role == 'admin'){
            next()
        }else{
            next('/notfind')
        }
    }else{
        next()
    }
})

export default router