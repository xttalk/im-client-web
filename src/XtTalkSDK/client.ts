import { XtTalkSdk } from "./sdk";
import {pb} from '@/proto/proto';
import { XtTalkEvent } from "./event";
import {io,Socket} from "socket.io-client";

export enum EventName{
    PrivateMsgEvent = "private_msg_event", //收到私聊消息
    PrivateMsgAckEvent = "private_msg_ack_event",//私聊消息送达事件


}
export class Client{
    public socket:WebSocket|undefined;
    public event:XtTalkEvent;
    private sdk:XtTalkSdk;
    private seq:number = 1;//客户端序列
    private _syncDataHandler = new Map<number,(bytes:Uint8Array)=>void>();
    // private sendBufferQueue:any[] = [];//发送队列

    public constructor(){
        this.event = new XtTalkEvent();
        this.sdk = new XtTalkSdk(this);
    }

    public connect(url:string){
        this.socket = new WebSocket(url);
        this.socket.binaryType = "arraybuffer";
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.socket.onmessage = this.onMessage.bind(this);
        this.socket.bufferedAmount;
    }


    public getSDK() : XtTalkSdk{
        return this.sdk;
    }
    public getEvent():XtTalkEvent{
        return this.event;
    }


    //发送数据包
    public sendPacket(command:number,bytes:Uint8Array){
        const seq = this.seq++;
        const buffer = this.buildPacket(seq,command,bytes);
        this.sendBuffer(buffer);
    }
    //发送数据包并且等待返回数据
    public sendAndWaitPacket(command:number,bytes:Uint8Array) : Promise<Uint8Array> {
        const seq = this.seq++;
        console.log('发送数据包:',seq,command);
        const packet = this.buildPacket(seq,command,bytes);
        //持续等待返回
        return new Promise<Uint8Array>((resolve,reject)=>{
            let timeoutId = setTimeout(() => {
                this._syncDataHandler.delete(seq);
                reject(undefined);
            }, 10 * 1000); //10喵超时
            this._syncDataHandler.set(seq,(bytes:Uint8Array)=>{
                clearTimeout(timeoutId);
                this._syncDataHandler.delete(seq);
                resolve(bytes);
            });
            this.sendBuffer(packet);
        });
    }
    private sendBuffer(buffer:ArrayBuffer){
        this.socket?.send(buffer);
        // private sendBuffer(buffer:ArrayBuffer){
        // if(this.sendBufferQueue.length == 0 && this.socket.bufferedAmount == 0){
        //     console.log('当前可以直接发送数据！！！！！！！！！！！！！！！！',buffer)
        //     this.socket.send(buffer)
        //     return;
        // }
        // if(this.sendBufferQueue.length == 0){//如果当前队列为0,则启动循环发送
        //     this.sendBufferQueue.push(buffer);//写入发送队列
        //     const queueTimer = setInterval(() => {
        //         if(this.socket.bufferedAmount == 0){
        //             let tmpBuffer = this.sendBufferQueue.shift();
        //             if(tmpBuffer){
        //                 this.socket.send(tmpBuffer);
        //             }
        //         }
        //         if(0 >= this.sendBufferQueue.length){
        //             clearInterval(queueTimer);
        //         }
        //     }, 1)
        // }else{
        //     this.sendBufferQueue.push(buffer);//写入发送队列
        // }
    }
    //构建数据包
    private buildPacket(seq:number,command:number,bytes:Uint8Array):ArrayBuffer{
        const buffer = new ArrayBuffer(2 + 2 + 4 + 4 + bytes.length);
        const view = new DataView(buffer);
        view.setUint16(0,0x01,true);
        view.setUint16(2,command,true);
        view.setUint32(4,seq,true);
        view.setUint32(8,bytes.length,true);
        //写入proto数据包
        for(let i=0;i<bytes.length;i++){
            view.setUint8(12 + i,bytes[i]);
        }
        return buffer
    }


    private onMessage(response:any){
        const {data} = response;
        //解析协议头
        const view = new DataView(data);  // 创建 DataView 对象
        // 读取数据
        const version = view.getUint16(0,true);
        const cmd = view.getUint16(2,true);
        const seq = view.getUint32(4,true);
        const dataLength = view.getUint32(8,true);
        console.log('收到服务端数据:',cmd,seq,data);

        // console.log("------------------------------------")
        // console.log("协议版本: ",version)
        // console.log("响应命令: ",cmd)
        // console.log("序列号:   ",clientSeq)
        // console.log("数据长度: ",dataLength)
        //读取实际数据解析为对应的protobuffer类
        let bytes = new ArrayBuffer(dataLength);
        const bytesView = new DataView(bytes)
        for(let i=0;i<dataLength;i++){
            bytesView.setUint8(i,view.getUint8(12 + i));
        }

        const uint8ArrayBytes = new Uint8Array(bytes);
        
        if(this._syncDataHandler.has(seq)){
            const callback = this._syncDataHandler.get(seq);
            if(typeof(callback) != 'undefined'){
                callback(uint8ArrayBytes);
                this._syncDataHandler.delete(seq);
            }
            return;
        }



        try{   
            switch(cmd){
                case pb.Packet.PrivateMsg://收到私聊消息
                    this.event.dispatchEvent(EventName.PrivateMsgEvent,uint8ArrayBytes);
                break;
                case pb.Packet.PrivateMsgAck://私聊消息送达
                    this.event.dispatchEvent(EventName.PrivateMsgAckEvent,uint8ArrayBytes);
                break;


            }
        }catch(e){
            console.log('报错了',e)
        }


    }

    private onOpen(){
        console.log('与服务端成功连接');
    }
    private onClose(){
        console.log('与服务端断开连接');
    }


}


