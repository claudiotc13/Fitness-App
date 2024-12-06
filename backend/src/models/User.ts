import mongoose, { Schema, Document } from "mongoose";

// Define the IUser interface for TypeScript typing
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Create the Mongoose schema
const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Export the model
export default mongoose.model<IUser>("User", UserSchema);
