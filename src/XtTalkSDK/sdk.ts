import { Client } from './client'
import {pb} from '@/proto/proto';
import { useUserStore } from '@/stores/useUserStore';
import { storeToRefs } from 'pinia';

const {setUser,getAvatar} = useUserStore();
const {userData} = storeToRefs(useUserStore())

export class XtTalkSdk{

    private client:Client;
    public constructor(c:Client){
        this.client = c;
    }

    //登录
    public async login(token:string){
        const msg = pb.PacketLoginReq.create({
            token:token
        });
        const bytes = pb.PacketLoginReq.encode(msg).finish();
        return await this.client.sendAndWaitPacket(pb.Packet.Login,bytes);
    }
    //获取当前账号信息
    public async getProfile(){
        const msg = pb.PacketGetProfileReq.create({});
        const bytes = pb.PacketGetProfileReq.encode(msg).finish();
        return await this.client.sendAndWaitPacket(pb.Packet.GetProfile,bytes);
    }
    //修改当前账号信息
    public async modifyProfile(properties?: pb.IPacketModfiyProfileReq){
        const msg = pb.PacketModfiyProfileReq.create(properties);
        const bytes = pb.PacketModfiyProfileReq.encode(msg).finish();
        return await this.client.sendAndWaitPacket(pb.Packet.GetProfile,bytes);
    }
    //获取好友信息
    public async getFriend(userId:number){
        const msg = pb.PacketGetFriendReq.create({
            userId:userId,
        });
        const bytes = pb.PacketGetFriendReq.encode(msg).finish();
        return await this.client.sendAndWaitPacket(pb.Packet.GetFriend,bytes);
    }
    //获取好友列表
    public async getFriendList(page:number,size:number) : Promise<Uint8Array>{
        const msg = pb.PacketGetFriendListReq.create({
            page:page,
            size:size,
        });
        const bytes = pb.PacketGetFriendListReq.encode(msg).finish();
        return await this.client.sendAndWaitPacket(pb.Packet.GetFriendList,bytes);
    }

    //加载私聊消息列表
    public async getPrivateMsgList(userId:number,size:number,lastMsgId:number) : Promise<Uint8Array>{
        const msg = pb.PacketPrivateMsgListReq.create({
            userId:userId,
            size:size,
            lastMsgId:lastMsgId
        });
        const bytes = pb.PacketPrivateMsgListReq.encode(msg).finish();
        return await this.client.sendAndWaitPacket(pb.Packet.PrivateMsgList,bytes);
    }

    private privateMsgSeq:number = 1000;
    public sendPrivateMsg(receiveId:number,msgType:pb.PacketMsgType,payload:Uint8Array) : pb.PacketPrivateMsg{
        const msg = pb.PacketPrivateMsg.create({
            msgSeq:this.privateMsgSeq++,//私聊消息序列
            msgRand:Math.floor(Math.random()*10000000) + 10000000, //随机值
            fromId:userData.value.userId,//设定发送方
            receiveId:receiveId, //消息接收用户
            msgType:msgType,
            payload:payload,
            clientTime:Math.floor(new Date().getTime() / 1000),//客户端发送时间
        })
        const bytes = pb.PacketPrivateMsg.encode(msg).finish();
        this.client.sendPacket(pb.Packet.PrivateMsg,bytes);
        return msg;
    }


}