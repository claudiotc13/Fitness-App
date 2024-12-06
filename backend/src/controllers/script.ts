import { ManageUserController } from "./ManageUserController";
import connectDB from "../dataBase/db";

connectDB();

const manageUserControllerInstance = new ManageUserController();

manageUserControllerInstance.createUser("ola", "ola", "ola");