<template>
    <el-button @click="connectServer" type="primary">连接服务器</el-button>
    <el-button @click="login" type="primary">登录账号</el-button>
    <input type="text" v-model="token">
    <div class="im_wrap">
        <div class="left_wrap">
            <div class="userinfo">
                <div class="avatar">
                    <img :src="getAvatar(Number(userData.userId))" alt="">
                </div>
                <h2 class="nickname line1">{{ userData.nickname }}</h2>
            </div>
        </div>
        <div class="session_wrap">
            <!-- 会话搜索 -->
            <div class="session_search">
                <div class="search_input">
                    <i-ep-search class="icon"/>
                    <input class="input" type="text" placeholder="阁下请输入搜索内容">
                </div>
            </div>
            <!-- 会话列表 -->
            <div class="session_list">
                <router-link :to="{name:'private_msg',params:{userId:Number(item.userId)}}" class="session_item" v-for="item in friendList">
                    <div class="avatar">
                        <img :src="getAvatar(Number(item.userId))" alt="">
                    </div>
                    <div class="info">
                        <h3 class="nickname">{{ item.nickname }}</h3>
                        <p class="desc">暂无信息</p>
                    </div>
                    <div class="tip">
                        <p class="time">23:14</p>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="content_wrap">
            <router-view :key="routerKey"></router-view>
        </div>

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
const routerKey = computed(() => {
    return route.fullPath;
});

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

        setUser({
            userId:Number(data.userId),
            nickname:data.nickName,
            email:data.email,
            note:data.note,
            age:data.age,
            sex:data.sex,
        });
        
        console.log('获取当前账号信息',data)
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