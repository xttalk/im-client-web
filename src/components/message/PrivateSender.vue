<template>
    <!-- 消息发送组件 -->
    <div class="sender">
        <textarea class="input" v-model="textarea" @keydown.enter.prevent="sendTextClick"></textarea>
        <div class="btns">
            <el-button type="primary" @click="sendImgClick">发送图片</el-button>
            <el-button type="primary" @click="sendTextClick" :disabled="textarea.length==0">发送文字</el-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import {pb} from '@/proto/proto';
import useToast from '@/utils/useToast';
import { TextMsg,ImageMsg } from '@/XtTalkSDK/msg';
/**
 * @sendMessage 发送消息事件
 */
const emits = defineEmits(['sendMessage']);

const textarea = ref<string>('');
//发送文字消息
const sendTextClick = () => {
    let text = textarea.value;
    if(useValid().isEmpty(text)){
        useToast().warning('请输入消息内容');
        return;
    }
    textarea.value = '';
    //消息投递出去
    emits('sendMessage',pb.PacketMsgType.Text,TextMsg(text));
}
const sendImgClick = () => {
    // todo 需要后续增加上传图片功能后获取详细数据.
    const msg = ImageMsg({
        url:"https://static.acgxt.com/images/66016200_p0.jpg",
        md5:"123123123123",
        width:500,
        height:200,
        size:10000,
    });
    emits('sendMessage',pb.PacketMsgType.Image,msg);
}
</script>
<style lang="scss"></style>