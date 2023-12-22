import express from 'express'
import TaskController from '../controller/task.controller.js';
const router = express()
router.get('/tasks',TaskController.getTasks)
router.get('/task/:id',TaskController.getTask)
router.post('/task',TaskController.addTask)
router.delete('/task/:id',TaskController.deleteTask)
router.patch('/task/:id',TaskController.updateTask)
export default router