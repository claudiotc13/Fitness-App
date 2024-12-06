import express from "express";
import bodyParser from "body-parser";
import connectDB from "../dataBase/db";
import router from "../routes/UserRoute";

const app = express();

// Middleware to parse incoming JSON
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Mount the user routes
app.use("/api", router);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
