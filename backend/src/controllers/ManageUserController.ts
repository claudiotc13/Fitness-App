import { ManageUserService } from "../services/ManageUserService";

export class ManageUserController{
    private manageUserService: ManageUserService;

    constructor(){
        this.manageUserService = new ManageUserService();
    }

    async createUser(name: string, username: string, email: string, password: string){
        try {
            const user = await this.manageUserService.createUser(name, username, email, password);
            return user;
        } catch (error) {
            console.error("Error creating user:", error);
            throw new Error("Failed to create user");
        }
    }

    async createUserFitnessProfile(username: string, weight: number, height: number, age: number, sport: string, injury: string, goal: string){
        try {
            const fitnessProfile = await this.manageUserService.createUserFitnessProfile(username, weight, height, age, sport, injury, goal);
            return fitnessProfile;
        } catch (error) {
            console.error("Error creating fitness profile:", error);
            throw new Error("Failed to create fitness profile");
        }
    }
}