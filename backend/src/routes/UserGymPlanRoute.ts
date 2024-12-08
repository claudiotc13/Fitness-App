import 'reflect-metadata';
import express from "express";
import { ManageUserGymPlanController } from "../controllers/ManageUserGymPlanController"; // Import the controller
import Container from "typedi";

const gymUserExercisePlanRouter = express.Router(); // Create a router instance
const userGymPlanController = Container.get(ManageUserGymPlanController) // Initialize the controller

// Route to create a user gym plan
gymUserExercisePlanRouter.post("/user-gym-plans", async (req, res) => {
  const { username, exercisePlans } = req.body; // Extract user gym plan details from the request body

  try {
    const userGymPlan = await userGymPlanController.createUserGymPlan(username, exercisePlans);
    res.status(201).json({ message: "User gym plan created successfully", userGymPlan });
  } catch (error) {
    console.error("Error creating user gym plan: ", error);
    res.status(500).json({ error: "Failed to create user gym plan" });
  }
});

// Route to create a gym exercise plan
gymUserExercisePlanRouter.post("/gym-exercise-plans", async (req, res) => {
  const { username, sets, reps, rest, gymExercise } = req.body; // Extract gym exercise plan details from the request body

  try {
    const gymExercisePlan = await userGymPlanController.createGymExercisePlan(username, sets, reps, rest, gymExercise);
    res.status(201).json({ message: "Gym exercise plan created successfully", gymExercisePlan });
  } catch (error) {
    console.error("Error creating gym exercise plan: ", error);
    res.status(500).json({ error: "Failed to create gym exercise plan" });
  }
});

export default gymUserExercisePlanRouter;