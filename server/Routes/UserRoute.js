import express from "express";
import UserController from "../Controllers/UserController.js";
// import authMiddleWare from "../MiddleWare/authMiddleWare.js";

const router = express.Router();

const controller = new UserController();
router.get('/', controller.getAllUsers)
router.get('/:id', controller.getUser)
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);
router.put("/:id/add", controller.addUser);
router.put("/:id/remove", controller.removeUser);
export default router;