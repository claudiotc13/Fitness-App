import { ManageExercisesService } from "../services/ManageExercisesService";

export class ManageExercisesController {
    private manageExercisesService: ManageExercisesService;

    constructor() {
        this.manageExercisesService = new ManageExercisesService();
    }

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