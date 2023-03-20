<template>
    <div class="friend_page">
        <div class="avatar">
            <img :src="getAvatar(Number(info?.userId))" alt="">
        </div>
        <div class="user_info">
            <h2 class="nickname">{{ info?.nickname }}</h2>
            <p class="note">{{ info?.note }}</p>
        </div>
        <div class="actions">
            <el-button type="primary" @click="sendMsg">发送消息</el-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { pb } from '@/proto/proto';
import useToast from '@/utils/useToast';
import ClientManager from '@/XtTalkSDK/common';
import { useSessionStore } from '@/stores/useSessionStore';
import { useUserStore } from '@/stores/useUserStore';
const {getAvatar} = useUserStore();


const {openSession}  = useSessionStore();

const route = useRoute();
const router = useRouter();
const info = ref<pb.Friend|null>();
const loadInfo = async (userId:number) => {
    const bytes = await ClientManager.getClient().getSDK().getFriend(userId);
    const data = pb.PacketGetFriendRes.decode(bytes);
    if(data.retCode != pb.RetCode.Success){
        useToast().error(`获取好友信息失败: ${data.retCode}`);
        router.back();
        return;
    }
    console.log(data)
    info.value = pb.Friend.create(data.friend??{});
}

const sendMsg = () => {
    router.push({
        name:'private_session',
        params:{
            userId:Number(info.value?.userId)
        }
    });
    if(info.value){
        openSession({
            targetId:Number(info.value.userId),
            targetType:'private_session',
            name:info.value.nickname,
            content:"",
            time:new Date().getTime()/1000
        });
    }
}
onMounted(()=>{
    const {userId} = route.params;
    loadInfo(Number(userId));
});
</script>
<style lang="scss">
.friend_page{
    .avatar{
        padding:50px 0 20px;
        img{
            margin:0 auto;
            border-radius:50%;
            display:block;
            width:120px;
            height:120px;
        }
    }
    .user_info{
        .nickname{
            font-size:22px;
            font-weight: 500;
            color:#111;
            text-align: center;
        }
        .note{
            margin:10px auto;
            color:#ABABAB;
            font-size:16px;
            text-align: center;
        }
    }
    .actions{
        text-align: center;
    }
}
</style>