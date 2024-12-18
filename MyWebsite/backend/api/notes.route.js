import express from 'express'
import NotesController from './notes.controller.js'
const router = express.Router()
router.route('/').get(NotesController.apiGetNotes)
export default router
