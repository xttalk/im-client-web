<template>
    
    <!-- 私聊消息页面组件 -->
    <div class="private_page">
        <div class="header">
            <h2 class="nickname">{{ friendInfo?.nickname }}</h2>
        </div>

        <div class="msg_list" ref="msgList">
            <PrivateMsgItem v-for="msg in messageList" :msg="msg"></PrivateMsgItem>
        </div>
        <PrivateSender @sendMessage="sendMessage"></PrivateSender>
    </div>
</template>
<script setup lang="ts">
import { pb } from '@/proto/proto';
import useToast from '@/utils/useToast';
import { EventName } from '@/XtTalkSDK/client';
import ClientManager from '@/XtTalkSDK/common';

const route = useRoute();
const router = useRouter();
const friendInfo = ref<pb.IFriend|null>();//好友信息
const messageList = ref<pb.PacketPrivateMsg[]>([]);//消息列表

//加载好友页面基础数据
const loadFriendPage = async (userId:number) => {
    const bytes = await ClientManager.getClient().getSDK().getFriend(userId);
    const data = pb.PacketGetFriendRes.decode(bytes);
    if(data.retCode != pb.RetCode.Success){
        useToast().error(`获取好友信息失败: ${data.retCode}`);
        router.back();
        return;
    }
    console.log(data)
    friendInfo.value = data.friend;
    //私聊消息事件
    ClientManager.getClient().getEvent().addEventListener(EventName.PrivateMsgEvent,(bytes:Uint8Array)=>{
        const msg = pb.PacketPrivateMsg.decode(bytes);
        // todo 需要判断消息来源
        console.log('收到私聊消息',msg);
        messageList.value.push(msg);
        scrollToEnd(true);
    });
    ClientManager.getClient().getEvent().addEventListener(EventName.PrivateMsgAckEvent,(bytes:Uint8Array)=>{
        const msg = pb.PacketPrivateMsgAck.decode(bytes);
        console.log('收到消息发送成功',msg);
        // todo 需要判断消息来源
        //补全对应消息的记录数据
        // if(msg.retCode == ) //这里后续判断消息确认类型，可能为送达、已读


        //查询消息设置msgid和seq
        for(let i=0;i<messageList.value.length;i++){
            let item = messageList.value[i];
            if(item.msgRand == msg.msgRand && item.msgSeq == item.msgSeq){
                item.seq = msg.seq;
                item.msgId = msg.msgId;
                break;
            }
        }
    });
    loadMessage(userId,0);

}

//加载私聊消息
const loadMessage = async (userId:number,lastMsgId:number) => {
    const bytes = await ClientManager.getClient().getSDK().getPrivateMsgList(userId,20,lastMsgId);
    const data = pb.PacketPrivateMsgListResp.decode(bytes);
    console.log(data);
    data.list.forEach(item=>{
        messageList.value.push(pb.PacketPrivateMsg.create(item));
    });
    await nextTick();
    scrollToEnd(true);
}

//消息发送
const sendMessage = (type:pb.PacketMsgType,bytes:Uint8Array) => {
    if(friendInfo.value){
        const msg = ClientManager.getClient().getSDK().sendPrivateMsg(Number(friendInfo.value.userId),type,bytes);
        messageList.value.push(msg);
        scrollToEnd(true);
    }
}


const msgList = ref<Element>();
//消息滚动条移动到最底部
const scrollToEnd = async (isForce:boolean) => {
    await nextTick();
    if(msgList.value){
        if(!isForce){ //是否强制移动到最底部
            if(msgList.value.scrollTop != msgList.value.scrollHeight){
                return;
            }
        }
        msgList.value.scrollTop = msgList.value.scrollHeight;
    }
}
//消息滚动条移动到最顶部
const scrollToStart = async() => {
    await nextTick();
    if(msgList.value){
        msgList.value.scrollTop = 0;
    }
}


//页面初始化
onMounted(()=>{
    const { userId } = route.params;
    loadFriendPage(Number(userId));
});


</script>
<style lang="scss">
.private_page {
    display: flex;
    flex-direction: column;
    height: 100%;

    .header {
        padding: 0 20px;
        height: 60px;
        border-bottom: 1px solid #D8D8D8;

        .nickname {
            line-height: 60px;
            font-size: 22px;
            font-weight: 500;
            color: #222;
        }
    }

    .msg_list {
        flex: 1;
        padding: 20px 20px;
        overflow-y: auto;

        
    }

    .sender {
        height: 150px;
        background-color: #FDF9FE;
        padding: 0 10px;

        .input {
            background-color: transparent;
            border: 0;
            height: calc(100% - 80px);
            width: calc(100% - 20px);
            font-size: 18px;
            padding: 10px;
            resize: none;
        }

        .btns {
            display: flex;
            justify-content: right;
        }
    }
}</style>