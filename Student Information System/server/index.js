const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.post('/addstudent', (req, res) => {
    const students = req.body

    let existingData = []
    try {
        existingData = JSON.parse(fs.readFileSync('students.json'))
    } catch (error) {
        // res.json({ Error: error })
    }

    existingData.push(students)

    fs.writeFileSync('students.json', JSON.stringify(existingData, null, 1))
    res.json({ success: true, message: 'Student added successfully' })

})

app.get('/viewstudents', (req, res) => {
    try {
        const students = JSON.parse(fs.readFileSync("students.json"))
        res.json(students)
    }
    catch (error) {
        console.error("Error loading student data", error)
        res
            .status(500)
            .json({ error: "Internal Server Error" })
    }
})

const port = 1337
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})