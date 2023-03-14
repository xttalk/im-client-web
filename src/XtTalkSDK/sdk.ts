import { Client } from './client'
import {pb} from '@/proto/proto';

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

    



}