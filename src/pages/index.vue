<template>
    <el-button @click="connectServer" type="primary">连接服务器</el-button>
    <el-button @click="login" type="primary">登录账号</el-button>
    <input type="text" v-model="token">
    <div class="im_wrap">
        <div class="left_wrap">
            <div class="userinfo">
                <div class="avatar">
                    <img :src="getAvatar(Number(userData?.userId))" alt="">
                </div>
                <h2 class="nickname line1">{{ userData?.nickname }}</h2>
            </div>

            <router-link :to="{name:'session_page'}">会话页面</router-link>
            <br>
            <router-link :to="{name:'friend_page'}">好友页面</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
// 该页面属于demo开发，后续完善
import ClientManager from '@/XtTalkSDK/common';

import {pb} from '@/proto/proto';
import useToast from '@/utils/useToast';
import { useUserStore } from '@/stores/useUserStore';
import { storeToRefs } from 'pinia';

const {setUser,getAvatar} = useUserStore();
const {userData} = storeToRefs(useUserStore())
const route = useRoute();
const router = useRouter();
const routerKey = computed(() => route.fullPath);

const token = ref<string>('1');
const friendList = ref<pb.IFriend[]>([]);
const login = async () => {
    try{
        const bytes = await ClientManager.getClient().getSDK().login(token.value);
        const data = pb.PacketLoginRes.decode(bytes);
        console.log('获取数据',data);
        if(data.retCode != pb.RetCode.Success){
            useToast().error(`登录失败,状态码: ${data.retCode}`);
            return;
        }
        useToast().success(`登录成功,用户ID: ${data.uid}`);
       //加载个人信息
       loadProfile();
       loadFriendList();
    }catch(e){
        useToast().error(`请求服务端超时`);
    }
}
//加载个人资料
const loadProfile = async () => {
    try{
        //获取好友列表
        const bytes = await ClientManager.getClient().getSDK().getProfile();
        const data = pb.PacketGetProfileRes.decode(bytes);
        const user = data.user;
        if(user){
            setUser({
                userId:Number(user.userId),
                nickname:user.nickname??'',
                username:user.username??'',
                email:user.email??'',
                note:user.note??'',
                age:Number(user.age),
                sex:Number(user.sex),
            });
        }

        
        
        console.log('获取当前账号信息',user)
    }catch(e){
        useToast().error(`请求服务端超时`);
    }
}
//加载好友列表
const loadFriendList = async () => {
    try{
        //获取好友列表
        const bytes = await ClientManager.getClient().getSDK().getFriendList(1,100);
        const data = pb.PacketGetFriendListRes.decode(bytes);
        console.log('获取当前好友列表',data)
        if(data.retCode != pb.RetCode.Success) {
            useToast().error(`加载好友列表失败,错误码(${data.retCode})`);
            return
        }
        friendList.value = [];
        data.list.forEach((item:pb.IFriend)=>{
            friendList.value.push(item);
        });
    }catch(e){
        useToast().error(`请求服务端超时`);
    }
}

const connectServer = () => {
    ClientManager.connect("ws://192.168.31.100:18001")
}


onMounted(()=>{
    if(route.name != 'index'){
        router.replace({
            name:'index'
        })
    }
});

</script>
<style lang="scss">
.im_wrap{
    width:1200px;
    height:740px;
    margin:100px auto 0;
    box-shadow: 0 0 10px #ccc;
    border-radius:5px;
    display:flex;
    .left_wrap{
        flex:0 0 160px;
        background-color: #FDE6FC;
        box-shadow: 2px 0px 8px rgb(230, 230, 230);
        position:relative;
        z-index:100;
        .userinfo{
            .avatar{
                height:100px;
                width:100px;
                margin:40px auto 10px;
                border:2px solid #fff;
                border-radius: 50%;
                img{
                    width:92px;
                    height:92px;
                    display:block;
                    border-radius:50%;
                    margin:4px auto;
                }
            }
            .nickname{
                font-size:22px;
                font-weight: 500;
                text-align: center;
            }
        }
    }
    .session_wrap{
        flex:0 0 300px;
        background-color: #FEF5FF;
        box-shadow: 2px 0px 8px rgb(230, 230, 230);
        position:relative;
        z-index:99;
        .session_search{
            height:50px;
            .search_input{
                background-color: #F4F1F5;
                height:40px;
                width:260px;
                margin:10px auto;
                border-radius:30px;
                display:flex;
                .icon{
                    flex:0 0 40px;
                    font-size:16px;
                    color:#BCBCBC;
                    margin:10px auto 0;
                }
                .input{
                    border:0;
                    background-color: transparent;
                    height:100%;
                    width:90%;
                }
            }
        }
        .session_list{
            .session_item{
                transition: 0.2s;
                height:40px;
                padding:12px 0;
                display:flex;
                .avatar{
                    flex:0 0 80px;
                    img{
                        width:40px;
                        height:40px;
                        border-radius:50%;
                        display:block;
                        margin:0 auto;
                    }
                }
                .info{
                    flex:1;
                    .nickname{
                        font-weight: 500;
                        font-size:16px;
                        color:#444;
                    }
                    .desc{
                        color:#828282;
                        font-size:14px;
                    }
                }
                .tip{
                    flex:0 0 50px;
                    color:#828282;
                    font-size:14px;
                    margin-right:10px;
                    .time{
                        text-align: right;
                    }
                    .unread{
                        margin-top:5px;
                        font-style: normal;
                        color:#fff;
                        display:block;
                        font-size:12px;
                        width:16px;
                        height:16px;
                        line-height:16px;
                        text-align: center;
                        border-radius: 50%;
                        background-color: rgb(214, 214, 214);
                        float:right;
                    }
                }
            }
            .router-link-active,
            .session_item:hover{
                cursor: pointer;
                background-color: #EFEBF0;
            }
        }
    }
    .content_wrap{
        flex:1;
        background-color: #FEF5FF;
    }
    
}



</style>