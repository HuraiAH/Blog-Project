import { Client, Databases, ID, Query, Storage } from "appwrite";
import envConfig from "../conf/config";

class Service {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(envConfig.appWriteUrl)
      .setProject(envConfig.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // blog post

  async createPost({ title, slug, content, featuredImage, userId }) {
    try {
      return await this.databases.createDocument(
        envConfig.appWriteDbId,
        envConfig.appWriteCollectionId,
        ID.unique(),
        { title, slug, content, featuredImage, userId }
      );
    } catch (error) {
      console.log("App write service :: createPost:: error", error);
    }
  }
  async updatePost(id, { title, content, featuredImage }) {
    try {
      return await this.databases.updateDocument(
        envConfig.appWriteDbId,
        envConfig.appWriteCollectionId,
        id,
        { title, content, featuredImage }
      );
    } catch (error) {
      console.log("App write service :: updatePost:: error", error);
    }
  }
  async deletePost(id) {
    try {
      await this.databases.deleteDocument(
        envConfig.appWriteDbId,
        envConfig.appWriteCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.log("App write service :: deletePost :: error", error);
      return false;
    }
  }
  async getPost(id) {
    try {
      return await this.databases.getDocument(
        envConfig.appWriteDbId,
        envConfig.appWriteCollectionId,
        id
      );
    } catch (error) {
      console.log("App write service :: deletePost :: error", error);
    }
  }
  async getActivePost(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        envConfig.appWriteDbId,
        envConfig.appWriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("App write service :: getActivePost :: error", error);
    }
  }

  // upload file

  async createFile(file) {
    try {
      return await this.storage.createFile(
        envConfig.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("App write service :: createFile :: error", error);
      return false;
    }
  }
  async deleteFile(id) {
    try {
      return await this.storage.deleteFile(envConfig.appWriteBucketId, id);
    } catch (error) {
      console.log("App write service :: deleteFile :: error", error);
      return false;
    }
  }
  getFilePreview(id) {
    try {
      const result = this.storage.getFilePreview(
        envConfig.appWriteBucketId,
        id
      );
      return result;
    } catch (error) {
      console.log("App write service :: deleteFile :: error", error);
    }
  }
}

const service = new Service();
export default service;
