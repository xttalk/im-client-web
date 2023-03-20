import { defineStore } from "pinia";



interface ISelfUser{
    userId:number//用户Id
    nickname:string //用户名称
    username:string //用户账号
    email:string //邮箱
    note:string //说明
    age:number //年龄
    sex:number //性别
}



export const useUserStore = defineStore('user',()=>{
    //用户数据
    const userData = ref<ISelfUser>();
    const setUser = (value:ISelfUser):void => {
        userData.value = value;
    }

    //鉴权
    const token = ref<string>();//登录token
    const setToken = (value:string):void => {
        localStorage.setItem('miku_token',value);
        token.value = value;
    }
    const removeToken = () => {
        token.value = '';
        localStorage.removeItem('miku_token');
    }
    const getToken = () => {
        if(useValid().isEmpty(token.value??'')){
            let authToken = localStorage.getItem('miku_token');
            if(authToken == null) return "";
            token.value = authToken;
            return token.value;
        }else{
            return token.value??'';
        }
    }

    //todo 临时数据
    const getAvatar = (uid:number)  => {
        return `https://static.acgxt.com/avatar/${uid}.jpg`;
    }

    return {
        userData,
        setUser,

        getAvatar,
        setToken,
        getToken,
        removeToken,
    }
});