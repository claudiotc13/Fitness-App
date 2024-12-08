import mongoose from 'mongoose';
import GymExercisePlan, { IGymExercisePlan } from '../models/GymExercisePlan';
import { Service } from 'typedi';

@Service()
export class GymExercisePlanPersistence {
    async saveNewGymExercisePlan(gymExercisePlan: IGymExercisePlan): Promise<IGymExercisePlan> {
        return await gymExercisePlan.save();
    }

    async getGymExercisePlanById(id: string): Promise<IGymExercisePlan | null> {
        return await GymExercisePlan.findById(id).exec();
    }

    async getGymExercisePlanByUsername(username: string): Promise<IGymExercisePlan | null> {
        return await GymExercisePlan.findOne({ username }).exec();
    }

    async updateGymExercisePlan(id: string, gymExercisePlan: Partial<IGymExercisePlan>): Promise<IGymExercisePlan | null> {
        return await GymExercisePlan.findByIdAndUpdate(id, gymExercisePlan, { new: true }).exec();
    }

    async deleteGymExercisePlan(id: string): Promise<IGymExercisePlan | null> {
        return await GymExercisePlan.findByIdAndDelete(id).exec();
    }
}