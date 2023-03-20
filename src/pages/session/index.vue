<template>
    <div class="session_wrap">
        <!-- 会话搜索 -->
        <div class="session_search">
            <div class="search_input">
                <i-ep-search class="icon" />
                <input class="input" type="text" placeholder="阁下请输入搜索内容">
            </div>
        </div>
        <!-- 会话列表 -->
        <div class="session_list">
            <router-link :to="{ name: item.targetType, params: { userId: Number(item.targetId) } }" class="session_item"
                v-for="item in sessionList">
                <div class="avatar">
                    <img :src="getAvatar(Number(item.targetId))" alt="">
                </div>
                <div class="info">
                    <h3 class="nickname">{{ item.name }}</h3>
                    <p class="desc">{{ item.content }}</p>
                </div>
                <div class="tip">
                    <p class="time">{{ useMoment((item.time??0) * 1000).format('HH:mm') }}</p>
                    <i class="unread" v-if="item.unread??0 > 0">{{ item.unread }}</i>
                </div>
            </router-link>
        </div>
    </div>
    <div class="content_wrap">
        <router-view :key="routerKey"></router-view>
    </div>
</template>
<script setup lang="ts">
import useMoment from '@/utils/useMoment';
import { useUserStore } from '@/stores/useUserStore';

import { useSessionStore } from '@/stores/useSessionStore';
import { storeToRefs } from 'pinia';

import { pb } from '@/proto/proto';
import { EventName } from '@/XtTalkSDK/client';
import ClientManager from '@/XtTalkSDK/common';
import { GetSimpleMsg } from '@/XtTalkSDK/utils';
const {updateSession} = useSessionStore();
const {sessionList} = storeToRefs(useSessionStore());
const {userData} = storeToRefs(useUserStore())


const {getAvatar} = useUserStore();
const route = useRoute();
const router = useRouter();
const routerKey = computed(() => route.fullPath);


onMounted(()=>{
    ClientManager.getClient().getEvent().addEventListener(EventName.PrivateMsgEvent,PrivateMsgEvent);
});
onUnmounted(()=>{
    ClientManager.getClient().getEvent().removeEventListener(EventName.PrivateMsgEvent,PrivateMsgEvent);
});


const PrivateMsgEvent = (bytes:Uint8Array) => {
    if(!userData.value)return;
    const msg = pb.PacketPrivateMsg.decode(bytes);
    console.log('收到私聊消息',msg);
    const simpleMsg = GetSimpleMsg(msg.msgType,msg.payload);

    let friendUserId = msg.fromId;
    let unreadInc = undefined;
    if(friendUserId == userData.value.userId){
        friendUserId = msg.receiveId;
        unreadInc = -1;
    }
    updateSession({
        targetType:'private_session',
        targetId:Number(friendUserId),
        content:simpleMsg,
        time:Number(msg.serverTime),
        unread:unreadInc,
    });
    
}




</script>
<style lang="scss"></style>