import mongoose, { Schema, Document } from "mongoose";

// Define the IFitnessProfile interface for TypeScript typing
export interface IFitnessProfile extends Document {
  username: string; // Reference to the User model
  height: number;
  weight: number;
  age: number;
  sport: string;
  injury: string;
  goal: string;
}

// Create the Mongoose schema
const FitnessProfileSchema: Schema = new Schema({
  username: { type: String, required: true}, // Reference to User
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  age: { type: Number, required: true },
  sport: { type: String, required: true },
  injury: { type: String, required: false },
  goal: { type: String, required: true },
});

// Export the model
export default mongoose.model<IFitnessProfile>("FitnessProfile", FitnessProfileSchema);
