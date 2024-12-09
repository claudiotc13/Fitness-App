import mongoose from "mongoose";

const connectDB = async () => {
  try {
    //use on macOS
    //const uri = "mongodb://localhost:27017/fitnessApp"; 
    //use on Windows
    const uri = "mongodb://127.0.0.1:27017/fitnessApp"; 
    await mongoose.connect(uri); 
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

