const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    // Fields / column-head
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    }
})

const student = mongoose.model('Student', StudentSchema)       // Student here is the collection or table name, in MongoDB it is seen as Students (plural) and not Student

module.exports = student