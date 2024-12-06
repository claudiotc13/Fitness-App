import User from "../models/User"; // Import the User model
import { IUser } from "../models/User"; // Import the IUser interface for typing

export class ManageUserService {

    async createUser(name: string, email: string, password: string): Promise<IUser> {
        try {
          // Create a new user document
          const user = new User({
            name,
            email,
            password, // Ideally hash the password before saving
          });
    
          // Save the user to the database
          await user.save();
    
          console.log("User created successfully:", user);
          return user;
        } catch (error) {
          console.error("Error creating user:", error);
          throw new Error("Failed to create user");
        }
    }

}