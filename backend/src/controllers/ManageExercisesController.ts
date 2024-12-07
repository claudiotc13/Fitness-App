import { Service, Inject } from "typedi";
import { ManageExercisesService } from "../services/ManageExercisesService";

@Service()
export class ManageExercisesController {

    constructor( 
        @Inject(() => ManageExercisesService) private manageExercisesService : ManageExercisesService
    ) {}

    async createGymExercise(name: string, description: string, muscle_group: string) {
        try {
            const gymExercise = await this.manageExercisesService.createGymExercise(name, description, muscle_group);
            return gymExercise;
        } catch (error) {
            console.error("Error creating gym exercise:", error);
            throw new Error("Failed to create gym exercise");
        }
    }
}