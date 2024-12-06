import express from "express";
import { ManageUserController } from "../controllers/ManageUserController"; // Import the controller

const router = express.Router(); // Create a router instance
const userController = new ManageUserController(); // Initialize the controller

// Route to create a user
router.post("/users", async (req, res) => {
  const { name, email, password } = req.body; // Extract user details from the request body

  try {
    const user = await userController.createUser(name, email, password);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user: ", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

export default router;
