//authentication and user credibility functions 

import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.account = new Account(this.client)
    }

    //create account
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login(email, password)
            } else {
                return userAccount;
            }

        } catch (exe) {
            throw exe;
        }
    }

    //Login 

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (exe) {
            throw exe;
        }
    }

    //is the user logged in

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (exe) {
            console.log("Appwrite server error");
            throw exe;
        }

        return null;
    }

    //logout

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (exe) {

        }
    }



}

const authService = new AuthService();
export default authService;
