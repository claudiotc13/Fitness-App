import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = "mongodb://localhost:27017/fitnessApp"; 
    await mongoose.connect(uri); 
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

