import express from 'express'
import authMiddleWare from '../MiddleWare/authMiddleWare.js';
import ChatController from '../Controllers/ChatController.js';

const router = express.Router()

let chat = new ChatController()
router.post('/', chat.createChat);
router.get('/:userId', chat.userChats);
router.get('/find/:firstId/:secondId', chat.findChat);
export default router