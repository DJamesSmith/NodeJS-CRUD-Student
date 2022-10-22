const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
app.set("views", "views")

// Access Route
const apiStudentRouter = require('./route/api/studentRoute')
app.use('/api', apiStudentRouter)

const dbDriver = "mongodb+srv://dionjamessmith:mwT1njLCNhxc68jd@cluster0.apg8y7z.mongodb.net/StudentCrud"

const port = process.env.PORT || 5000

mongoose.connect(dbDriver, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server & DB connected, listening on PORT http://localhost:${port}`)
        })
    })
    .catch(error => {
        console.log(`Server error: ${error}`)
    })
