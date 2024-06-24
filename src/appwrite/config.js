import config from "../config/config";

import { Client , ID , Databases , Account , Storage , Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
    }
}

const  service = new Service()
export default service