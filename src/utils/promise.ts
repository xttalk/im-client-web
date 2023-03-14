
export class createCatchPromise {
    public oldPromise: Promise<any>;

    /**
     * 
     * @param oldPromise 原始Promise
     * @param onrejected 默认catch
     */
    constructor(oldPromise: Promise<any>,defaultCatch: ((reason: any) => any)) {
        this.oldPromise = oldPromise;

        const methods = ['then', 'catch', 'finally']
        for (const method of methods) {
            /**@ts-ignore */
            this[method] = function (...args:any) {
                /**@ts-ignore */
                this.oldPromise = this.oldPromise[method](...args)
                return this
            }
        }
        Promise.resolve().then(() => {
            return this.oldPromise;
        }).catch(defaultCatch);
        
    }
}; 
