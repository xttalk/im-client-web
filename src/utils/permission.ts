import { App } from "vue"

import {useUserStore} from '@/stores/useUserStore';

export default {
    checkPermission(permission: string) {
        const {userPermission} = useUserStore();
        if(userPermission.is_root)return true;
        let permissionId = 0;
        //查询是否有这个接口需要权限
        for (const pid in userPermission.all_permission) {
            let permissionPath = userPermission.all_permission[pid];
            if(permissionPath == permission){
                /* @ts-ignore */
                permissionId = pid;
                break;
            }
        }
        if(permissionId == 0)return true;//不需要权限校验
        for(let p of userPermission.current_permission){
            if(p==permissionId)return true;
        }
        return false;
    },
    setPermissionStatus(el:any,status:boolean){
        if(status){
            el.classList.remove('ma-permission-hidden');
        }else{
            el.classList.add('ma-permission-hidden');
        }
    },

    install(app: App) {
        let live = this;
        app.directive('permission', {
            mounted(el, binding) {
                live.setPermissionStatus(el,live.checkPermission(binding.value));
            },
            updated(el, binding) {
                live.setPermissionStatus(el,live.checkPermission(binding.value));
            }
        });
    }
}