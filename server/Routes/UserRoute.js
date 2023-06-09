import express from "express";
import authMiddleWare from "../MiddleWare/authMiddleWare.js";
import UserController from "../Controllers/UserController.js";

const router = express.Router();

let user = new UserController();

router.get('/', authMiddleWare, user.getAllUsers)
router.get('/:id', authMiddleWare, user.getUser);
router.put("/:id", authMiddleWare, user.updateUser);
router.delete('/:id', authMiddleWare, user.deleteUser);
router.put('/:id/add', authMiddleWare, user.addUser);
router.put('/:id/remove', authMiddleWare, user.removeUser);

export default router;