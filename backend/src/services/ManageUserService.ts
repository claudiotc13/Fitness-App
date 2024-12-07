import User from "../models/User"; // Import the User model
import { IUser } from "../models/User"; // Import the IUser interface for typing
import FitnessProfile, { IFitnessProfile } from "../models/FitnessProfile"; // Import the FitnessProfile model
import { Collection } from "mongoose";
import { UserPersistence } from "../persistence/UsersPersistence";
import { FitnessProfilesPersistence } from "../persistence/FitnessProfilesPersistence";
import { Service, Inject } from "typedi";

@Service()
export class ManageUserService {

    constructor(
        @Inject(() => UserPersistence) private userPersistence: UserPersistence,
        @Inject(() => FitnessProfilesPersistence) private fitnessProfilesPersistence: FitnessProfilesPersistence
    ){}



    async createUser(name: string, username: string, email: string, password: string): Promise<IUser> {
        try {
          // Create a new user document
          const user = new User({
            name,
            username,
            email,
            password, // Ideally hash the password before saving
          });
    
          // Save the user to the database
          await this.userPersistence.saveNewUser(user);
    
          console.log("User created successfully:", user);
          return user;
        } catch (error) {
          console.error("Error creating user:", error);
          throw new Error("Failed to create user");
        }
    }


    async createUserFitnessProfile(username: string, weight: number, height: number, age: number, sport: string, injury: string, goal: string): Promise<IFitnessProfile> {
        //verify if username exists
        const user = await this.userPersistence.getUserByUsername(username);

        if(!user){
            throw new Error("User does not exist");

        } else {

            try {
                // Create a new fitness profile document
                const fitnessProfile = new FitnessProfile({
                    username,
                    weight,
                    height,
                    age,
                    sport,
                    injury,
                    goal,
                });

                // Save the fitness profile to the database
                await this.fitnessProfilesPersistence.saveNewFitnessProfile(fitnessProfile);

                console.log("Fitness profile created successfully:", fitnessProfile);
                return fitnessProfile;
            }catch (error) {
                console.error("Error creating fitness profile:", error);
                throw new Error("Failed to create fitness profile");
            }

        }
    }

}