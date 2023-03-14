interface IConfirm{
    title?: string
    type?:'' | 'success' | 'warning' | 'info' | 'error',
    confirmButtonText?:string
    cancelButtonText?:string
}


export default function useConfirm(msg:string,options?:IConfirm) : Promise<void>{
    options = options == undefined?{}:options;
    options.type = options.type == undefined?'warning':options.type;
    return new Promise<void>((resolve,fail)=>{
        ElMessageBox.confirm(msg,options?.title??'',options).then(() => {
            resolve();
        }).catch(()=>{
            fail();
        });
    });
}