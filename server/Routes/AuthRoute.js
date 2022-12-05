import express from "express";
// import { loginUser, registerUser } from "../Controllers/AuthController.js";
import AuthController from "../Controllers/AuthController.js";

const router = express.Router()

let auth = new AuthController();
router.post('/register', auth.registerUser)
router.post('/login', auth.loginUser)
export default router