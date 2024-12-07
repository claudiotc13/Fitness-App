import express from "express";
import { ManageExercisesController } from "../controllers/ManageExercisesController";

const exercisesRouter = express.Router();
const exercisesController = new ManageExercisesController();

// Route to create a gym exercise
exercisesRouter.post("/gym-exercises", async (req, res) => {
  const {name, description, muscle_group } = req.body;

  try {
    const gymExercise = await exercisesController.createGymExercise(name, description, muscle_group);
    res.status(201).json({ message: "Gym exercise created successfully", gymExercise });
  } catch (error) {
    console.error("Error creating gym exercise: ", error);
    res.status(500).json({ error: "Failed to create gym exercise" });
  }
});

export default exercisesRouter;