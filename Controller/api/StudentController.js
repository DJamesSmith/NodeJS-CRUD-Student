const exStudent = require('../../Model/api/studentModel')

// POST req to Create new Student
const createStudent = async (req, res) => {
    if (!req.body.name && !req.body.email && !req.body.phone && !req.body.city && !req.body.subject) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const addStudent = new exStudent({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        subject: req.body.subject
    })

    await addStudent.save()
        .then(data => {
            res.status(200).send({ success: true, msg: "New Student created successfully!", student: data })
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating Student"
            })
        })
}

// GET req to Fetch data of ALL Students
const allStudents = (req, res) => {
    exStudent.find((error, data) => {
        console.log(data)
        if (!error) {
            res.status(200).send({ success: true, msg: "All Students data fetched Successfully !", student: data })
        }
    })
}

// GET req to Fetch data of SINGLE Student
const singleStudent = (req, res) => {
    const sid = req.params.id

    console.log('sid Value: ', sid)

    exStudent.findById(sid)
        .then(data => {
            res.status(200).send({ success: true, msg: `${data.name}'s data with Student ID ${sid} fetched Successfully !`, student: data })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating Student"
            })
        })
}

// PUT req to Edit Student
const editStudent = (req, res) => {
    if (!req.body.name && !req.body.email && !req.body.phone && !req.body.city && !req.body.subject) {
        res.status(400).send({ message: "Please fill all the input fields." })
    }

    const sid = req.params.id
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const city = req.body.city
    const subject = req.body.subject

    exStudent.findById(sid).then(async result => {
        result.name = name
        result.email = email
        result.phone = phone
        result.city = city
        result.subject = subject

        await result.save()
            .then(data => {
                res.status(200).send({ success: true, msg: `${name}'s data edited successfully !`, student: data })
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating Student"
                })
            })
    })
}

// GET req to Fetch data of SINGLE Student
const deleteStudent = (req, res) => {
    const sid = req.params.id

    console.log('sid Value: ', sid)

    exStudent.deleteOne({ _id: sid })
        .then(data => {
            res.status(200).send({ success: true, msg: `Data with Student ID [${sid}] deleted Successfully !`, student: data })
        })
        .catch(error => {
            console.log(`Error: ${error}`)
        })
}

module.exports = ({
    createStudent,
    allStudents,
    singleStudent,
    editStudent,
    deleteStudent
})