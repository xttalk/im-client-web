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
            <router-link :to="{ name: 'friend_info', params: { userId: Number(item.userId) } }" class="session_item"
                v-for="item in friendList">
                <div class="avatar">
                    <img :src="getAvatar(Number(item.userId))" alt="">
                </div>
                <div class="info">
                    <h3 class="nickname">{{ item.nickname }}</h3>
                    <p class="desc">{{ item.note }}</p>
                </div>
                <div class="tip">
                    <p class="time"></p>
                </div>
            </router-link>
        </div>
    </div>
    <div class="content_wrap">
        <router-view :key="routerKey"></router-view>
    </div>
</template>
<script setup lang="ts">
import {pb} from '@/proto/proto';
import useToast from '@/utils/useToast';
import ClientManager from '@/XtTalkSDK/common';
import { useUserStore } from '@/stores/useUserStore';

const {getAvatar} = useUserStore();
const route = useRoute();
const router = useRouter();
const routerKey = computed(() => route.fullPath);

const friendList = ref<pb.IFriend[]>([]);

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

onMounted(()=>{
    loadFriendList();
});
</script>
<style lang="scss"></style>