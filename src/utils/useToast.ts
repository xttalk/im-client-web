

export default function useToast(){
    const info = (msg:string) => ElMessage({message: msg,type: 'info',});
    const warning = (msg:string) => ElMessage({message: msg,type: 'warning',});
    const error = (msg:string) => ElMessage({message: msg,type: 'error',});
    const success = (msg:string) => ElMessage({message: msg,type: 'success',});

    return {
        info,
        warning,
        error,
        success
    }
}