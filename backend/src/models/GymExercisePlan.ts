import mongoose, { Schema, Document } from 'mongoose';

export interface IGymExercisePlan extends Document {
  username: string;
  sets: number;
  reps: number;
  rest: number;
  gymExercise: string;
}

const GymExercisePlanSchema: Schema = new Schema({
  username: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: Number, required: true },
  rest: { type: Number, required: true },
  gymExercise: { type: String, required: true },
});

export default mongoose.model<IGymExercisePlan>('GymExercisePlan', GymExercisePlanSchema);