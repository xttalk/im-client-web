import { pb } from '@/proto/proto';






//文字消息
export const TextMsg = (text:string) :Uint8Array => {
    const msg = pb.TextMsg.create({
        content:text,
    });
    return pb.TextMsg.encode(msg).finish()
}
export const ToText = (bytes:Uint8Array) :string => {
    return pb.TextMsg.decode(bytes).content;
}

//图片消息
export const ImageMsg = (img:pb.IImageMsg) :Uint8Array => {
    const msg = pb.ImageMsg.create(img);
    return pb.ImageMsg.encode(msg).finish();
}
export const ToImage = (bytes:Uint8Array) : pb.IImageMsg => {
    return pb.ImageMsg.decode(bytes);
}
