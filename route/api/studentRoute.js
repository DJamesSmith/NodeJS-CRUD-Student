const express = require('express')
const Router = express()
const studentController = require('../../Controller/api/StudentController')
const bodyParser = require('body-parser')

// // Use BodyParser for GET/POST data to/from MongoDB/Server
Router.use(bodyParser.json())
Router.use(bodyParser.urlencoded({ extended: true }))

// ----------------------------- APIs ------------------------------

// GET ALL
Router.get('/', studentController.allStudents)

// GET SINGLE
Router.get('/singleStudent/:id', studentController.singleStudent)

// POST
Router.post('/createStudent', studentController.createStudent)

// EDIT
Router.put('/editStudent/:id', studentController.editStudent)

// DELETE
Router.delete('/deleteStudent/:id', studentController.deleteStudent)

// ------------------------ Client (Browser) ------------------------

// // GET
// Router.get('/', studentController.allStudents)

// // POST
// Router.get('/addStudent', studentController.addStudent)
// Router.post('/createStudent', studentController.createStudent)

// // PUT  
// Router.get('/editStudent/:id', studentController.editStudent)
// Router.post('/updateStudent', studentController.updateStudent)

// // DELETE
// Router.get('/deleteStudent/:id', studentController.deleteStudent)

module.exports = Router