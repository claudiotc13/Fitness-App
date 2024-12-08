import mongoose, { Schema, Document } from 'mongoose';
import { IGymExercisePlan } from './GymExercisePlan';

export interface IUserGymPlan extends Document {
  username: string;
  exercisePlans: IGymExercisePlan[];
}

const UserGymPlanSchema: Schema = new Schema({
  username: { type: String, required: true },
  exercisePlans: [{ type: Schema.Types.ObjectId, ref: 'GymExercisePlan' }],
});

export default mongoose.model<IUserGymPlan>('UserGymPlan', UserGymPlanSchema);