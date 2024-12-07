import GymExercise, { IGymExercise } from '../models/GymExercise';
import { GymExercisePersistence } from '../persistence/GymExercisePersistence';

export class ManageExercisesService {
    private gymExercisePersistence = new GymExercisePersistence();

    async createGymExercise(name: string, description: string, muscle_group: string): Promise<IGymExercise> {
        try {
            // Create a new gym exercise document
            const gymExercise = new GymExercise({
                name,
                description,
                muscle_group
            });

            // Save the gym exercise to the database
            await this.gymExercisePersistence.saveNewGymExercise(gymExercise);

            console.log("Gym exercise created successfully:", gymExercise);
            return gymExercise;
        } catch (error) {
            console.error("Error creating gym exercise:", error);
            throw new Error("Failed to create gym exercise");
        }
    }

    async getGymExerciseById(id: string): Promise<IGymExercise | null> {
        return await this.gymExercisePersistence.getGymExerciseById(id);
    }

    async getGymExerciseByName(name: string): Promise<IGymExercise | null> {
        return await this.gymExercisePersistence.getGymExerciseByName(name);
    }

    async updateGymExercise(id: string, gymExercise: Partial<IGymExercise>): Promise<IGymExercise | null> {
        return await this.gymExercisePersistence.updateGymExercise(id, gymExercise);
    }

    async deleteGymExercise(id: string): Promise<IGymExercise | null> {
        return await this.gymExercisePersistence.deleteGymExercise(id);
    }
}