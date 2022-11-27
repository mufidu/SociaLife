import express from "express";
import AuthController from "../Controllers/AuthController.js";

const router = express.Router()

const controller = new AuthController()
router.post('/register', controller.registerUser)
router.post('/login', controller.loginUser)
export default router