import express from "express";
import bodyParser from "body-parser";
import connectDB from "../dataBase/db";
import router from "../routes/UserRoute";
import exercisesRouter from "../routes/ExercisesRoute";
import gymUserExercisePlanRouter from "../routes/UserGymPlanRoute";

const app = express();

// Middleware to parse incoming JSON
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Mount the user routes
app.use("/api", router);
app.use("/api", exercisesRouter);
app.use("/api", gymUserExercisePlanRouter);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
