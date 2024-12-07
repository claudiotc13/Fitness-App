import mongoose from 'mongoose';
import FitnessProfile, {IFitnessProfile} from '../models/FitnessProfile';
import { Service } from 'typedi';

@Service()
export class FitnessProfilesPersistence {
    async saveNewFitnessProfile(fitnessProfile: IFitnessProfile): Promise<IFitnessProfile> {
        return await fitnessProfile.save();
    }

    async getFitnessProfileByUsername(username: string): Promise<IFitnessProfile | null> {
        return await FitnessProfile.findOne({ username }).exec();
    }

    async updateFitnessProfile(id: string, fitnessProfile: Partial<IFitnessProfile>): Promise<IFitnessProfile | null> {
        return await FitnessProfile.findByIdAndUpdate(id, fitnessProfile, { new: true }).exec();
    }

    async deleteFitnessProfile(id: string): Promise<IFitnessProfile | null> {
        return await FitnessProfile.findByIdAndDelete(id).exec();
    }
}