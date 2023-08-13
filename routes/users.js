import express from "express";
import { updateUser,deleteUser,getSingleUser,getAllUser} from "./../controllers/userController.js";

const router = express.Router();

// update User
router.put("/:id",updateUser);

// delete User
router.delete("/:id",deleteUser);

// getSingle User
router.get("/:id",getSingleUser);

// getAll User
router.get("/",getAllUser);



export default router;