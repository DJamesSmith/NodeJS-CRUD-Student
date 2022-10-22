const Student = require('../Model/student')

// GET all details - Fetch data
exports.allStudents = (req, res) => {
    Student.find((error, data) => {
        console.log(data)
        if (!error) {
            res.render('allStudents', {
                title: 'CRUD | All Students',
                allData: data
            })
        }
    })
}

// ------------------------------------------------------------------

// POST req to render 'Add Student' page
exports.addStudent = ((req, res) => {
    res.render('addStudent', {
        title: 'CRUD | Add Student'
    })
})

// POST req to MongoDB
exports.createStudent = (req, res) => {
    // console.log(req.body)

    const studentData = new Student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        city: req.body.city,
        subject: req.body.subject
    })
    studentData.save()
        .then(result => {
            console.log(result, ' Student added')
            res.redirect('/')
        })
        .catch(err => {
            console.log(err, 'Data not saved')
        })
}

// ------------------------------------------------------------------

// GET for details in EditPage
exports.editStudent = (req, res) => {
    const sid = req.params.id

    Student.findById(sid)
        .then(result => {
            res.render('editStudent', {
                title: 'CRUD | Edit Student',
                data: result
            })
        })
}

// POST for EditPage
exports.updateStudent = (req, res) => {
    console.log('req.body: ', req.body)

    const sid = req.body.id
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const city = req.body.city
    const subject = req.body.subject

    Student.findById(sid).then(result => {
        result.name = name
        result.email = email
        result.phone = phone
        result.city = city
        result.subject = subject

        result.save()
            .then(response => {
                res.redirect('/')
                console.log(response, 'Updated Successfully')
            })
            .catch(error => {
                console.log(error)
            })
    })
}

// ------------------------------------------------------------------

// DELETE
exports.deleteStudent = (req, res) => {
    const sid = req.params.id

    Student.deleteOne({ _id: sid })
        .then((error, data) => {
            console.log(data)
            res.redirect('/')
        })
        .catch(error => {
            console.log(error)
        })
}