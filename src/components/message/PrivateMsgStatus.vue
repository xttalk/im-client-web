<template>
    <div class="time" v-if="msg">
        {{ useMoment(Number(msg.serverTime == 0 ? msg.clientTime : msg.serverTime) * 1000).format('HH:mm') }}

        <!-- 消息发送状态只有自己可见 -->
        <template v-if="userData?.userId == msg.fromId">
            <template v-if="msg.msgId == 0">
                <i class="icon-dengdailoukong xt-icon status status-wait" title="发送中"></i>
            </template>
            <template v-else-if="msg.msgId > 0">
                <i class="icon-zhengque xt-icon status status-ack" title="送达"></i>
                <!-- <i class="icon-zhengque xt-icon status status-read" title="已读"></i> -->
            </template>
            <template v-else>
                <i class="icon-cuowu xt-icon status status-error" title="发送失败"></i>
            </template>
        </template>
    </div>
</template>
<script setup lang="ts">
import { pb } from '@/proto/proto';
import useMoment from '@/utils/useMoment';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/useUserStore';
const {userData} = storeToRefs(useUserStore())
const props = defineProps({
    msg: pb.PacketPrivateMsg
});
</script>
<style lang="scss" scoped>
</style>