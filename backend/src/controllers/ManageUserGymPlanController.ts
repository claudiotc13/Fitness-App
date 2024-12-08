import { Service, Inject } from "typedi";
import { ManageUserGymPlanService } from "../services/ManageUserGymPlanService";

@Service()
export class ManageUserGymPlanController{
    constructor(
        @Inject(() => ManageUserGymPlanService) private manageUserGymPlanService: ManageUserGymPlanService
    ){}

    async createUserGymPlan(username: string, exercisePlans: string[]){
        try {
            const userGymPlan = await this.manageUserGymPlanService.createUserGymPlan(username, exercisePlans);
            return userGymPlan;
        } catch (error) {
            console.error("Error creating user gym plan:", error);
            throw new Error("Failed to create user gym plan");
        }
    }

    async createGymExercisePlan(username: string, sets: number, reps: number, rest: number, gymExercise: string){
        try {
            const gymExercisePlan = await this.manageUserGymPlanService.createGymExercisePlan(username, sets, reps, rest, gymExercise);
            return gymExercisePlan;
        } catch (error) {
            console.error("Error creating gym exercise plan:", error);
            throw new Error("Failed to create gym exercise plan");
        }
    }
}