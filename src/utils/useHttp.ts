// import nprogress from '@/utils/progress';

import axios from "axios";
import {AxiosError} from "axios";
import {createCatchPromise} from '@/utils/promise';
import { ElLoading, useModal } from "element-plus";
import { useUserStore } from '@/stores/useUserStore';

//导入路由
import router from '@/routers/index';


let rootUri = `https://tools-api.miku.icu`;
if(/127.0.0.1/.test(window.location.origin)){//
    //本地环境
    rootUri = `http://127.0.0.1:51001`
}
interface IHttpResult {
    // code:number //暂无用途
    status:number //状态码
    msg:string //接口返回消息
    data?:any //数据结构
    //请求额外数据
    httpStatusCode?:number //Http响应状态码
}
interface IHttpOptions {
    loading?:boolean //是否使用自动loading
    query?:Record<string,any> //url地址query参数
    params?:Record<string,any> //formdata参数
}



class HttpRequest{

    public get(path:string,params?:any,options?:IHttpOptions) : Promise<IHttpResult>{
        return this.send(path,"GET",{
            ...options,
            query:params??{}
        });
    }
    public post(path:string,params?:any,options?:IHttpOptions) : Promise<IHttpResult>{
        return this.send(path,"POST",{
            ...options,
            params:params??{}
        });
    }

    public parsePathToUrl(path:string):string{
        if(useValid().isUrl(path))return path;
        return `${rootUri}${path}`;
    }

    //整合请求发送
    private send(path:string,method?:string,options?:IHttpOptions) : Promise<IHttpResult>{
        const url = this.parsePathToUrl(path);
        let isLoading = options?.loading??true;

        //获取token
        const userStore = useUserStore();
        const {getToken,removeToken} = userStore;

        const headers = {
            Authorization:getToken()
        };
        //全屏loading
        let loading:any = null;
        if(isLoading){
            loading = ElLoading.service({
                lock: true,
                text: '数据加载中',
                background: 'rgba(0, 0, 0, 0.7)',
            });
        }
        // nprogress.start();
        /** @ts-ignore */
        return new createCatchPromise(new Promise((resolve,reject)=>{
            setTimeout(() => {
                axios.request({
                    url:url,
                    method:method,
                    headers:headers,
                    params:options?.query??{},
                    data:options?.params??{}
                }).then(r=>{
                    if(loading != null)loading.close();
                    // nprogress.done();
                    let result = r.data as IHttpResult;
                    const {status,msg,data} = result;
                    const {status:httpStatusCode} = r;
                    if(status == 200){
                        resolve({
                            ...result,
                            httpStatusCode:httpStatusCode
                        });
                        return;
                    }
                    if(status == 403){
                        removeToken();
                        //退回到登录页面
                        router.replace({
                            name:'login'
                        });
                    }
                    reject({
                        ...result,
                        httpStatusCode:httpStatusCode
                    });
                }).catch((err:AxiosError) =>{
                    if(loading != null)loading.close();
                    // nprogress.done();
                    if(typeof(err?.response?.data) == 'undefined'){
                        reject({
                            code:999,
                            status:999,
                            msg:`系统错误: ${err.message} （${err.code}）`,
                            data:null,
                        });
                    }else{
                        let result = err?.response?.data as IHttpResult;
                        const {status,msg,data} = result;
                        switch(status){
                            case 403://登录失效
                            removeToken();
                            //退回到登录页面
                            router.replace({
                                name:'login'
                            });
                            break;
                        }
                        reject({
                            ...result,
                            httpStatusCode:err.status
                        });
                    }
                });
            },0);
        }),(r)=>{
            if(loading != null)loading.close();
            // nprogress.done();
            console.error(`[Error] 默认未处理请求异常: Http响应码:${r.httpStatusCode} -> Status:${r.status} : ${r.msg}`);
            useToast().error(r.msg);
        });
    }
}

export default new HttpRequest();
