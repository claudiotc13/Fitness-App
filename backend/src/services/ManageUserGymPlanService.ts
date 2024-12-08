import { Service, Inject } from "typedi";
import { ManageUserService } from "../services/ManageUserService";
import { UserGymPlanPersistence } from "../persistence/UserGymPlanPersistence";
import { GymExercisePlanPersistence } from "../persistence/GymExercisePlanPersistence";
import UserGymPlan, { IUserGymPlan } from "../models/UserGymPlan";
import GymExercisePlan, { IGymExercisePlan } from "../models/GymExercisePlan";
import { GymExercisePersistence } from "../persistence/GymExercisePersistence";

@Service()
export class ManageUserGymPlanService {
    constructor(
        @Inject(() => ManageUserService) private manageUserService: ManageUserService,
        @Inject(() => UserGymPlanPersistence) private userGymPlanPersistence: UserGymPlanPersistence,
        @Inject(() => GymExercisePlanPersistence) private gymExercisePlanPersistence: GymExercisePlanPersistence,
        @Inject(() => GymExercisePersistence) private gymExercisePersistence: GymExercisePersistence
    ){}

    //TODO: Implement a method to verify if the exercise plans really exist
    //and if they exist return the exercise plans
    //because we are passing a string from the controller and the model expects an array of the class GymExercisePlan
    async createUserGymPlan(username: string, exercisePlans: string[]): Promise<IUserGymPlan> {
        // Verify if username exists
        const user = await this.manageUserService.getUserByUsername(username);

        if(!user){
            throw new Error("User does not exist");

        } else {

            try {
                // Create a new user gym plan document
                const userGymPlan = new UserGymPlan({
                    username,
                    exercisePlans
                });

                // Save the user gym plan to the database
                await this.userGymPlanPersistence.saveNewUserGymPlan(userGymPlan);

                console.log("User gym plan created successfully:", userGymPlan);
                return userGymPlan;
            } catch (error) {
                console.error("Error creating user gym plan:", error);
                throw new Error("Failed to create user gym plan");
            }
        }
    }


    async createGymExercisePlan(username: string, sets: number, reps: number, rest: number, gymExercise: string): Promise<IGymExercisePlan> {
        // Verify if username exists
        const user = await this.manageUserService.getUserByUsername(username);

        if(!user){
            throw new Error("User does not exist");

        } else {

            // Verify if gym exercise exists
            const exercise = await this.gymExercisePersistence.getGymExerciseByName(gymExercise);

            if(!exercise){
                throw new Error("Gym exercise does not exist");

            } else {

                try {
                    // Create a new gym exercise plan document
                    const gymExercisePlan = new GymExercisePlan({
                        username,
                        sets,
                        reps,
                        rest,
                        gymExercise
                    });

                    // Save the gym exercise plan to the database
                    await this.gymExercisePlanPersistence.saveNewGymExercisePlan(gymExercisePlan);

                    console.log("Gym exercise plan created successfully:", gymExercisePlan);
                    return gymExercisePlan;
                } catch (error) {
                    console.error("Error creating gym exercise plan:", error);
                    throw new Error("Failed to create gym exercise plan");
                }
            }
        }
    }

    
}

