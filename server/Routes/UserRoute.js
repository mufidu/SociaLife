import express from "express";
// import { addUser, deleteUser, getAllUsers, getUser, removeUser, updateUser } from "../Controllers/UserController.js";
// import authMiddleWare from "../MiddleWare/authMiddleWare.js";
import UserController from "../Controllers/UserController.js";

const router = express.Router();

let user = new UserController();

router.get('/', user.getAllUsers)
router.get("/:id", user.getUser);
router.put("/:id", user.updateUser);
router.delete("/:id", user.deleteUser);
router.put("/:id/add", user.addUser);
router.put("/:id/remove", user.removeUser);

export default router;