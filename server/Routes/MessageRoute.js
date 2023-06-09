import express from 'express'
import MessageController from '../Controllers/MessageController.js';
import authMiddleWare from '../MiddleWare/authMiddleWare.js';

const router = express.Router()

let message = new MessageController();
router.post('/', authMiddleWare, message.addMessage)
router.get("/:chatId", authMiddleWare, message.getMessages);

export default router