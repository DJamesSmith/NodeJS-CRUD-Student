const express = require('express')
const Router = express.Router()
const studentController = require('../Controller/studentController')

// GET
Router.get('/', studentController.allStudents)

// POST
Router.get('/addStudent', studentController.addStudent)
Router.post('/createStudent', studentController.createStudent)

// PUT  
Router.get('/editStudent/:id', studentController.editStudent)
Router.post('/updateStudent', studentController.updateStudent)

// DELETE
Router.get('/deleteStudent/:id', studentController.deleteStudent)

module.exports = Router