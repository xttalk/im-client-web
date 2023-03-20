import nprogress from '@/utils/progress';
//路由支持
import { createRouter, createWebHistory,createWebHashHistory,RouteRecordRaw } from "vue-router";
const routes:RouteRecordRaw[] = [
    {
        path:'/',
        name:'index',
        component:()=>import('@/pages/index.vue'),
        children:[
            //会话页面
            {
                path:'/session',
                name:'session_page',
                component:()=>import('@/pages/session/index.vue'),
                children:[
                    //私聊会话
                    {
                        path:'/private/:userId',
                        name:'private_session',
                        component:()=>import('@/pages/session/private.vue')
                    }
                ]
            },
            //好友页面
            {
                path:'/friend',
                name:'friend_page',
                component:()=>import('@/pages/friend/index.vue'),
                children:[
                    {
                        path:'/friend/:userId',
                        name:'friend_info',
                        component:()=>import('@/pages/friend/info.vue')
                    }
                ]
            },
            // 群组页面

        ]
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