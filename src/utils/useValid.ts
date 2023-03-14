

export default function useValid(){

    return {
        //字符串是否为空
        isEmpty:(val:string) => {
            if(val == "" || val == null || val == undefined) return true;
			if(0 >= val.replace(new RegExp(' ','g'),'').length) return true;
            return false;
        },
        //是否是JSON字符串
        isJson:(val:string)=>{
            try{
                JSON.parse(val);
                return true;
            }catch(e){
                return false;
            }
        },
        //是否是数字
        isNumber:(val:string)=>{
            return /^\d+(?=\.{0,1}\d+$|$)/.test(val);
        },
        //是否是整数
        isInt:(val:string) => {
            return /^\d$/.test(val);
        },
        //中国大陆手机号验证
        isMobile:(val:string)=>{
            return /^1[3-9]\d{9}$/.test(val)
        },
        //Url验证
        isUrl:(val:string)=>{
            return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(val);
        },
        //邮箱验证
        isEmail:(val:string)=>{
            return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(val);
        },
        //车牌验证
        isCar:(val:string)=>{
            const greenReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
            // 燃油车
            const blueReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
            if(val.length === 7 ){
                return greenReg.test(val);
            }else if(val.length === 8 ){
                return blueReg.test(val);
            }else{
                return false;
            }
        }
    }

}