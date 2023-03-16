import { Client } from "./client";



class ClientManager{
    private client:Client;
    constructor(){
        this.client = new Client();
    }
    public connect(url:string){
        this.client.connect(url);
    }

    public getClient():Client {
        return this.client;
    }
}

export default new ClientManager();