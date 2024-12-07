import mongoose from 'mongoose';
import GymExercise, { IGymExercise } from '../models/GymExercise';

export class GymExercisePersistence {
    async saveNewGymExercise(gymExercise: IGymExercise): Promise<IGymExercise> {
        return await gymExercise.save();
    }

    async getGymExerciseById(id: string): Promise<IGymExercise | null> {
        return await GymExercise.findById(id).exec();
    }

    async getGymExerciseByName(name: string): Promise<IGymExercise | null> {
        return await GymExercise.findOne({ name }).exec();
    }

    async updateGymExercise(id: string, gymExercise: Partial<IGymExercise>): Promise<IGymExercise | null> {
        return await GymExercise.findByIdAndUpdate(id, gymExercise, { new: true }).exec();
    }

    async deleteGymExercise(id: string): Promise<IGymExercise | null> {
        return await GymExercise.findByIdAndDelete(id).exec();
    }
}