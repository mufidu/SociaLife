import express from 'express'
import MessageController from '../Controllers/MessageController.js'

const router = express.Router()

const controller = new MessageController()
router.post('/', controller.addMessage)
router.get('/:chatId', controller.getMessages)

export default router