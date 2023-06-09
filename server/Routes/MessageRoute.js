import express from 'express'
import MessageController from '../Controllers/MessageController.js';
import authMiddleWare from '../MiddleWare/authMiddleWare.js';

const router = express.Router()

let message = new MessageController();
router.post('/', message.addMessage);
router.get('/:chatId', message.getMessages);

export default router