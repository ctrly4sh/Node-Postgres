import config from "../config/config";
import { Client, ID, Databases, Account, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    //create post
    async createPost({ title, slug, content, featuredImage, Status, userID }) {
        try {
            return this.databases.createDocument(config.appwriteDatabaseId, config.appwriteCollectionId, documentId, slug, {
                title,
                content,
                featuredImage,
                Status,
            }
            )
        }
        catch (exe) {
            console.log(exe);
        }
    }

    //update post 
    async updatePost(slug, { title, featuredImage, status, userID }) {
        try {
            return await this.databases.updateDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug, {
                title,
                featuredImage,
                status,
                userID
            }
            )
        } catch (exe) {
            console.log(exe);
        }
    }
}

const service = new Service()
export default service