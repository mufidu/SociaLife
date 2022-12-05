import express from "express";
import { addUser, deleteUser, getAllUsers, getUser, removeUser, updateUser } from "../Controllers/UserController.js";
// import authMiddleWare from "../MiddleWare/authMiddleWare.js";

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/:id/add", addUser);
router.put("/:id/remove", removeUser);
export default router;