import express from 'express'
// import { addMessage, getMessages } from '../Controllers/MessageController.js'
import MessageController from '../Controllers/MessageController.js';

const router = express.Router()

let message = new MessageController();
router.post('/', message.addMessage)
router.get("/:chatId", message.getMessages);

export default router