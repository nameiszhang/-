import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const route=new VueRouter({
    routes:[{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        meta:{
            title: '首页'
        },
        component:()=> import("@/views/home/home")
    }, {
        path: '/login',
        meta: {
            title: '登录'
        },
        component: () => import('@/views/login/index')
    },{
        path: '/detail/:type/:id',
        name: 'detail',
        meta: {
            title: '详情'
        },
        props:true,
        component: () => import('@/components/details')
    },{
        path: '/application/:type',
        name: 'application',
        meta: {
            title: '申请表'
        },
        props:true,
        component: () => import('@/components/application')
    }]
})

route.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})
export default route