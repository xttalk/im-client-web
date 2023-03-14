//顶部进度条
import NProgress from 'nprogress';
import "@/assets/css/progress.scss";
NProgress.configure({ 
    easing: 'ease',  // 动画方式    
    speed: 1000,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载icon
    trickleSpeed: 100, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
});
export default {
    start(){
        NProgress.start();
    },
    done(){
        NProgress.done();
    }
}