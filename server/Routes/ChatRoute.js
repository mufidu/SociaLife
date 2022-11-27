import express from 'express'
import ChatController from '../Controllers/ChatController.js'

const router = express.Router()

const controller = new ChatController()
router.post('/', controller.createChat)
router.get('/:userId', controller.userChats)
router.get('/find/:firstId/:secondId', controller.findChat)
export default router