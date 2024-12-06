import { ManageUserService } from "../services/ManageUserService";

export class ManageUserController{
    private manageUserService: ManageUserService;

    constructor(){
        this.manageUserService = new ManageUserService();
    }

    async createUser(name: string, email: string, password: string){
        try {
            const user = await this.manageUserService.createUser(name, email, password);
            return user;
        } catch (error) {
            console.error("Error creating user:", error);
            throw new Error("Failed to create user");
        }
    }
}