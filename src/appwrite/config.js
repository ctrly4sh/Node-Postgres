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

    //delete post
    async deleteFile(slug) {
        try {
            await this.databases.deleteDocument(config.appwriteDatabaseId, config.appwriteCollectionId, slug)
            return true
        } catch (exe) {
            return false
        }
    }

    //get post : Single
    getPost(fileId) {
        return this.bucket.getFilePreview(config.appwriteBucketId, fileId)
    }

    //get multiple posts using query 
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteCollectionId, queries)
        } catch (error) {
            console.log(error);
        }
    }

    //upload file 
    async uploadfile(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file)

        } catch (exe) {
            console.log(exe);
        }
    }

    //delete file
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId)

        } catch (exe) {
            console.log(exe);
        }
    }

    //getFile preview 

    getFilePreview(fileId){
        try{   
            return this.bucket.getFilePreview(config.appwriteBucketId, fileId)
        }catch(exe){
            console.log(exe);
        }
    }

}



const service = new Service()
export default service