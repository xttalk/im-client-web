import nprogress from '@/utils/progress';
//路由支持
import { createRouter, createWebHistory,createWebHashHistory,RouteRecordRaw } from "vue-router";
const routes:RouteRecordRaw[] = [
    {
        path:'/',
        name:'index',
        component:()=>import('@/pages/index.vue'),
    },
];



let router = createRouter({
    history:createWebHistory(),
    routes:routes,
});
//路由守卫
router.beforeEach((to, from, next) => {
	// 开启加载进度条
	nprogress.start();
    next();
});

router.afterEach(() => {
	// 关闭加载进度条
    nprogress.done();
});
export default router;