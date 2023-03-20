




export class XtTalkEvent {


    public listener = new Map<string, ((bytes: Uint8Array) => void)[]>();

    public addEventListener(name: string, callback: (bytes: Uint8Array) => void) {
        if (!this.listener.has(name)) {
            this.listener.set(name, [callback]);
        } else {
            this.listener.get(name)?.push(callback);
        }
    }

    public dispatchEvent(name: string, bytes: Uint8Array) {
        if (!this.listener.has(name)) {
            return;
        }
        this.listener.get(name)?.forEach((callback: (bytes: Uint8Array) => void) => {
            callback(bytes);
        })
    }
    public removeEventListener(name: string, callback: (bytes: Uint8Array) => void) {
        if (!this.listener.has(name)) {
            return;
        }
        const callbacks = this.listener.get(name);
        if (!callbacks) {
            return;
        }
        const index = callbacks.indexOf(callback);
        if (index >= 0) callbacks.splice(index, 1);
    }
}