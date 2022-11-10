import express from "express";
import { addUser, deleteUser, getUser, removeUser, updateUser } from "../Controllers/UserController.js";

const router = express.Router();

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/add', addUser)
router.put('/:id/remove', removeUser)
export default router;