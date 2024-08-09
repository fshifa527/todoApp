const express= require('express')
const { getTasks, createTasks, getTask, updateTask, deleteTask, searchTask } = require('../Controllers/taskController')
const { userRegister, userLogin } = require('../Controllers/userController')
const router = express.Router()
const jwtmiddle = require('../Middleware/jwtmiddle')


router.post('/register',userRegister)
router.post('/login',userLogin)
router.post('/api/tasks',jwtmiddle,createTasks)
router.get('/api/tasks',getTasks)
router.get('/api/tasks_search/:search',searchTask)
router.get('/api/tasks/:id',jwtmiddle,getTask)
router.put('/api/tasks/:id',jwtmiddle,updateTask)
router.delete('/api/tasks/:id',jwtmiddle,deleteTask)

module.exports = router