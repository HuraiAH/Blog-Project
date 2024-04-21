import { Account, Client, ID } from "appwrite";
import envConfig from "../conf/config";

class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(envConfig.appWriteUrl)
      .setProject(envConfig.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(`account create error :: ${error}`);
    }
  }

  async login({ email, password }) {
    return await this.account.createEmailSession(email, password);
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("App write service :: getCurrentUser :: error", error);
    }
    return null;
  }
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("App write service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
