import express from 'express'
import NotesController from './notes.controller.js'
import BlogController from './blog.controller.js'
const router = express.Router()
router.route('/').get(NotesController.apiGetNotes)
router.route('/id/:id').get(NotesController.apiGetNoteById)
router.route('/topic').get(NotesController.apiGetTopic)
router.route('/update')
.post(BlogController.apiPostBlog)
.put(BlogController.apiUpdateBlog)
.delete(BlogController.apiDeleteBlog)

export default router
