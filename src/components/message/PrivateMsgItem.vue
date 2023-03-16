<template>
    <template v-if="msg">
        <div :class="['msg_item', msg.fromId == userData.userId ? 'self_msg_item' : '']">
        <div class="avatar">
            <img :src="getAvatar(Number(msg.fromId))" alt="">
        </div>
        <div class="msg_wrap">
            <!-- 文本消息 -->
            <template v-if="msg.msgType == pb.PacketMsgType.Text">
                <div class="msg_text">
                    <p>{{ ToText(msg.payload) }}</p>
                    <PrivateMsgStatus :msg="msg"/>
                </div>
            </template>
            <!-- 图片消息 -->
            <template v-else-if="msg.msgType == pb.PacketMsgType.Image">
                <div class="msg_img">
                    <img :src="ToImage(msg.payload).url ?? ''" alt="">
                    <PrivateMsgStatus :msg="msg"/>
                </div>
            </template>
        </div>
    </div>
    </template>
</template>
<script setup lang="ts">
import { pb } from '@/proto/proto';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/useUserStore';
import {ToText,ToImage} from '@/XtTalkSDK/msg';
const {getAvatar} = useUserStore();
const {userData} = storeToRefs(useUserStore())
const props = defineProps({
    msg: pb.PacketPrivateMsg
});
</script>
<style lang="scss">
.msg_item {
    display: flex;
    margin: 5px auto;

    .avatar {
        flex: 0 0 50px;

        img {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: block;
            margin: 0 auto;
        }
    }

    .msg_wrap {
        margin-top: 5px;


        .time {
            .status-ack {
                color: #999;
            }

            .status-error {
                color: red;
            }

            .status-wait {
                color: #999;
            }

            .status-read {
                color: green;
            }
        }

        .msg_text {
            background-color: #fff;
            // background-color: red;
            border-radius: 10px;
            border-top-left-radius: 0;
            font-size: 14px;
            padding: 8px 8px;
            padding-right: 45px;
            position: relative;

            p {
                color: #333;
                word-break: break-all;
                word-wrap: break-word;
            }

            .time {
                position: absolute;
                bottom: 7px;
                right: 10px;
                color: #999;
                font-size: 12px;

                .status {
                    margin-left: 3px;
                    font-size: 12px;
                }
            }
        }

        .msg_img {
            max-width: 300px;
            height: auto;
            border: 2px solid #fff;
            border-radius: 5px;
            overflow: hidden;
            position: relative;

            img {
                width: 100%;
                height: auto;
                display: block;
            }

            .time {
                background-color: rgba(0, 0, 0, 0.5);
                padding: 5px;
                border-radius: 1px;
                position: absolute;
                bottom: 0;
                right: 0;
                color: #fff;
                font-size: 12px;
                transition: .2s;
                opacity: 0;

                .status {
                    margin-left: 3px;
                    font-size: 12px;
                }

                .status-ack {
                    color: #fff;
                }

                .status-error {
                    color: red;
                }

                .status-wait {
                    color: #fff;
                }

                .status-read {
                    color: green;
                }
            }
        }


        .msg_text,.msg_img{
            box-shadow:0 0 10px #e8e8e8;
        }



        .msg_img:hover {
            .time {
                opacity: 1;
            }
        }

    }
}

//发送方为自己
.self_msg_item {
    flex-direction: row-reverse;

    .msg_wrap {
        .msg_text {
            border-radius: 10px;
            border-top-right-radius: 0;
            padding-right: 60px;
        }
    }
}</style>