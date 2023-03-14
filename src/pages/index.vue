<template>
    <el-button @click="connectServer" type="primary">连接服务器</el-button>
    <el-button @click="login" type="primary">登录账号</el-button>
    <el-button @click="getData" type="primary">同时获取数据</el-button>
    <el-button @click="loadProfile" type="primary">获取当前账号数据</el-button>
    <div class="im_wrap">
        <div class="left_wrap">
            <div class="userinfo">
                <div class="avatar">
                    <img src="http://q2.qlogo.cn/headimg_dl?dst_uin=2289453456&spec=100" alt="">
                </div>
                <h2 class="nickname line1">幻音い</h2>
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
                <div class="session_item" v-for="item in friendList">
                    <div class="avatar">
                        <img :src="`http://q2.qlogo.cn/headimg_dl?dst_uin=${item.qq}&spec=100`" alt="">
                    </div>
                    <div class="info">
                        <h3 class="nickname">{{ item.nickname }}</h3>
                        <p class="desc">{{ item.desc }}</p>
                    </div>
                    <div class="tip">
                        <p class="time">23:14</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content_wrap private_page">
            <!-- 私聊会话界面 -->
            <div class="private_page">
                <div class="header">
                    <h2 class="nickname">图书の帕秋莉</h2>
                </div>
                <div class="msg_list">
                    <div class="msg_item" v-for="msg in 10">
                        <div class="avatar">
                            <img src="http://q2.qlogo.cn/headimg_dl?dst_uin=953259199&spec=100" alt="">
                        </div>
                        <div class="msg_wrap">
                            <p class="msg_text">你干嘛 哎哟</p>
                        </div>
                    </div>
                </div>
                <div class="sender">
                    <textarea class="input" ></textarea>
                    <div class="btns">
                        <el-button type="primary">发送</el-button>
                    </div>
                </div>
            </div>
        </div>


        

    </div>
</template>
<script setup lang="ts">

import { Client,EventName } from '@/XtTalkSDK/client';

import {pb} from '@/proto/proto';
import useToast from '@/utils/useToast';
import { useUserStore } from '@/stores/useUserStore';

const {setUser} = useUserStore()

const getAvatar = (uid:number) => {
    return `https://static.acgxt.com/avatar/${uid}.jpg`;
}


const friendList = ref<any[]>([
    {qq:953259199,nickname:'图书の帕秋莉',desc:"OP你在干嘛"},
    {qq:541769917,nickname:'『    』',desc:'奶奶的 二十分钟没进去'},
    {qq:1025630734,nickname:'蓝天白云',desc:'请我吃饭'},
    {qq:1062000001,nickname:'你想变成什么颜色',desc:'转钱 明天发货'},
    {qq:395797943,nickname:'Aaaaria',desc:'啊啊'},
    {qq:182477959,nickname:'R°',desc:'你干嘛 哎哟'},
    {qq:1312563525,nickname:'Youmu°',desc:'?'},
]);
const msgList = ref<any[]>([

]);


const client = ref<Client>();

const login = async (command:any) => {
    if(!client.value) return;
    try{
        const bytes = await client.value.getSDK().login("1");
        const data = pb.PacketLoginRes.decode(bytes);
        console.log('获取数据',data);
        if(data.retCode != pb.RetCode.Success){
            useToast().error(`登录失败,状态码: ${data.retCode}`);
            return;
        }
        useToast().success(`登录成功，用户ID: ${data.uid}`);
       

    }catch(e){
        useToast().error(`请求服务端超时`);
    }
}
const getData = () => {
    try{
        loadProfile();
        loadFriendList();
    }catch(e){
        useToast().error(`请求服务端超时`);
    }
}
//加载个人资料
const loadProfile = async () => {
    if(!client.value)return;
    try{
        //获取好友列表
        const bytes = await client.value.getSDK().getProfile();
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
    if(!client.value)return;
    try{
        //获取好友列表
        const bytes = await client.value.getSDK().getFriendList(1,100);
        const data = pb.PacketGetFriendListRes.decode(bytes);
        console.log('获取当前好友列表',data)
    }catch(e){
        useToast().error(`请求服务端超时`);
    }
}

const connectServer = () => {
    // client.value = new Client("ws://127.0.0.1:12345");
    client.value = new Client("ws://192.168.31.100:18001");
    // client.value = new Client("ws://192.168.31.100:9080");
    //私聊消息事件
    client.value.getEvent().addEventListener(EventName.PrivateMsgEvent,(bytes:Uint8Array)=>{
        const msg = pb.PacketPrivateMsg.decode(bytes);
        console.log('收到私聊消息',msg)
    });
}


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
            .session_item:hover{
                cursor: pointer;
                background-color: #EFEBF0;
            }
        }
    }
    .content_wrap{
        flex:1;
        background-color: #FEF5FF;
        .private_page{
            display: flex;
            flex-direction: column;
            height: 100%;
            .header{
                padding:0 20px;
                height:60px;
                border-bottom:1px solid #D8D8D8;
                .nickname{
                    line-height:60px;
                    font-size:22px;
                    font-weight: 500;
                    color:#222;
                }
            }
            .msg_list{
                flex:1;
                padding:20px 20px;
                overflow-y: auto;
                .msg_item{
                    display:flex;
                    margin:5px auto;
                    .avatar{
                        flex:0 0 50px;
                        img{
                            width:40px;
                            height:40px;
                            border-radius:50%;
                        }
                    }
                    .msg_wrap{
                        .msg_text{
                            background-color: #fff;
                            // background-color: red;
                            border-top-right-radius: 20px;
                            border-bottom-left-radius: 20px;
                            font-size:14px;
                            padding:8px 8px;
                            color:#333;
                        }
                       
                    }
                }
            }
            .sender{
                height:150px;
                background-color: #FDF9FE;
                padding:0 10px;
                .input{
                    background-color: transparent;
                    border:0;
                    height:calc(100% - 80px);
                    width:calc(100% - 20px);
                    font-size:18px;
                    padding:10px;
                    resize:none;
                }
                .btns{
                    display:flex;
                    justify-content: right;
                }
            }
        }
    }
    
}



</style>