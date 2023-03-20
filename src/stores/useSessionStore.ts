import router from "@/routers";
import { pb } from '@/proto/proto';
import { defineStore } from "pinia";
import ClientManager from '@/XtTalkSDK/common';

interface ISession{
    targetType:string //会话跳转类型 private_session、group_session
    targetId:number //会话目标ID
    name?:string //昵称
    content?:string //内容
    time?:number //时间
    unread?:number //未读消息数量
}

/**
 * 临时会话页面存储
 */
export const useSessionStore = defineStore('session',()=>{

    const sessionList = ref<ISession[]>([]);
    //打开指定的session
    const openSession = (item:ISession):void => {
        let index = sessionIndexOf(item.targetType,item.targetId);
        if(index == -1){
            sessionList.value.unshift(item);
        }else{
            //移动
            const session = sessionList.value.splice(index,1)[0];
            sessionList.value.unshift(session);
        }
        router.push({
            name:item.targetType,
            params:{
                userId:item.targetId
            }
        });
    }
    const updateSession = async (newSession:ISession) => {
        let index = sessionIndexOf(newSession.targetType,newSession.targetId);
        if(index == -1){
            switch(newSession.targetType){
                case 'private_session':
                    let bytes = await ClientManager.getClient().getSDK().getFriend(newSession.targetId);
                    let friend = pb.PacketGetFriendRes.decode(bytes);
                    newSession.name = friend.friend?.nickname??'';
                break;
                default:
                    newSession.name = '[未知会话]';
                break;
            }
            if(newSession.unread && newSession.unread >= 0){
                newSession.unread = newSession.unread;
            }else{
                newSession.unread = 0;
            }
            sessionList.value.unshift(newSession);
        }else{
            if(newSession.name){
                sessionList.value[index].name = newSession.name;
            }
            if(newSession.content){
                sessionList.value[index].content = newSession.content;
            }
            if(newSession.time && newSession.time > 0){
                sessionList.value[index].time = newSession.time;
            }
            console.log('日志',newSession)
            if(typeof(newSession.unread) == "number"){
                if(newSession.unread >= 0){ //大于0设定
                    sessionList.value[index].unread = newSession.unread;
                }
            }else{
                let unread = sessionList.value[index].unread??0;
                sessionList.value[index].unread = unread + 1;
            }
            
        }
    }
    const sessionIndexOf = (targetType:string,targetId:number):number => {
        for(let i=0;i<sessionList.value.length;i++){
            if(sessionList.value[i].targetType == targetType && sessionList.value[i].targetId == targetId){
                return i;
            }
        }
        return -1;
    }
    //删除指定session
    const removeSession = (targetType:string,targetId:number):boolean => {
        let index = sessionIndexOf(targetType,targetId);
        if(index != -1){
            sessionList.value.splice(index,1);
            return true;
        }
        return false;
    }



    return {
        sessionList,
        updateSession,
        openSession,
        removeSession
    }
});