import express from "express";
import { updateUser, deleteUser, getSingleUser, getAllUser } from "./../controllers/userController.js";
import { verifyUser } from "../verifyUser.js";

const router = express.Router();

// update User
router.put("/:id", verifyUser, updateUser);

// delete User
router.delete("/:id", verifyUser, deleteUser);

// getSingle User
router.get("/:id", verifyUser, getSingleUser);

// getAll User
router.get("/", verifyUser, getAllUser);



export default router;