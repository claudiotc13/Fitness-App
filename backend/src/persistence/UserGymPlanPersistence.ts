import mongoose from 'mongoose';
import UserGymPlan, { IUserGymPlan } from '../models/UserGymPlan';
import { Service } from 'typedi';

@Service()
export class UserGymPlanPersistence {
    async saveNewUserGymPlan(userGymPlan: IUserGymPlan): Promise<IUserGymPlan> {
        return await userGymPlan.save();
    }

    async getUserGymPlanByUsername(username: string): Promise<IUserGymPlan | null> {
        return await UserGymPlan.findOne({ username }).exec();
    }

    async updateUserGymPlan(id: string, userGymPlan: Partial<IUserGymPlan>): Promise<IUserGymPlan | null> {
        return await UserGymPlan.findByIdAndUpdate(id, userGymPlan, { new: true }).exec();
    }

    async deleteUserGymPlan(id: string): Promise<IUserGymPlan | null> {
        return await UserGymPlan.findByIdAndDelete(id).exec();
    }
}