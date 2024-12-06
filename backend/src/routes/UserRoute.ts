import express from "express";
import { ManageUserController } from "../controllers/ManageUserController"; // Import the controller

const router = express.Router(); // Create a router instance
const userController = new ManageUserController(); // Initialize the controller

// Route to create a user
router.post("/users", async (req, res) => {
  const { name, username, email, password } = req.body; // Extract user details from the request body

  try {
    const user = await userController.createUser(name, username, email, password);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user: ", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Route to create a fitness profile
router.post("/fitness-profiles", async (req, res) => {
  const { username, weight, height, age, sport, injury, goal } = req.body; // Extract fitness profile details from the request body

  try {
    const fitnessProfile = await userController.createUserFitnessProfile(username, weight, height, age, sport, injury, goal);
    res.status(201).json({ message: "Fitness profile created successfully", fitnessProfile });
  } catch (error) {
    console.error("Error creating fitness profile: ", error);
    res.status(500).json({ error: "Failed to create fitness profile" });
  }
});

export default router;
