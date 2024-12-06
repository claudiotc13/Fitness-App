import mongoose, { Schema, Document } from "mongoose";

// Define the IGymExercise interface for TypeScript typing
export interface IGymExercise extends Document {
  name: string;
  description: string;
  muscle_group: string;
}

// Create the Mongoose schema
const GymExerciseSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  muscle_group: { type: String, required: true },
});

// Export the model
export default mongoose.model<IGymExercise>("GymExercise", GymExerciseSchema);
