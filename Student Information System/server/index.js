const express = require('express')
const app = express()
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

const Users = require('./user.model')

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ipt2')
        console.log('Connected to the database!')
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

app.use(cors())

connectDb()

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('Hello, world!')
})



app.post('/addstudent', (req, res) => {
    try {
        const students = req.body

        if (isNaN(students.id)) {

            res.json({ message: 'ID Number must be a number' })
        }

        if (students.id.length > 8) {
            res.json({ message: 'ID Number should not exceed to 8 characters' })
        }


        if (!/^[a-zA-Z0-9\s]+$/.test(students.firstname) ||
            !/^[a-zA-Z0-9\s]+$/.test(students.lastname) ||
            !/^[a-zA-Z0-9\s]+$/.test(students.middlename) ||
            !/^[a-zA-Z0-9\s]+$/.test(students.course)) {
            return res.json({ message: 'Field should not have a special character' })
        }

        let existingData = []
        try {
            existingData = JSON.parse(fs.readFileSync('students.json'));

        } catch (error) {
            res.json({ message: error })
        }

        const index = existingData.find(item => item.id === students.id)

        if (index) {
            res.json({ message: 'Id Already Exists!' })
        } else {
            existingData.push(students)
            fs.writeFileSync('students.json', JSON.stringify(existingData, null, 2))
            res.json({ success: true, message: 'Student added successfully' })
        }


    } catch (error) {
        res.json({ Error: `Srrver error: ${error}` })
    }
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

app.post('/editstudent', (req, res) => {
    const updatedStudent = req.body;

    try {
        let existingData = JSON.parse(fs.readFileSync('students.json'));

        const index = existingData.findIndex(student => student.id === updatedStudent.id);
        if (index !== -1) {
            // Update the student data at the found index
            existingData[index] = updatedStudent;
            fs.writeFileSync('students.json', JSON.stringify(existingData, null, 1));
            res.json({ success: true, message: 'Student updated successfully' });
        } else {
            res.status(404).json({ success: false, message: 'Student not found' });
        }
    } catch (error) {
        console.error("Error editing student data", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post('/adduser', async (req, res) => {
    try {
        const values = req.body
        await Users.create(values)
        res.json({ success: true, message: 'User added successfully!' })
    } catch (error) {
        res.json({ success: false, message: `Add user error: ${error}` })
    }
})

app.get('/viewuser', async (req, res) => {
    try {
        const data = await Users.find()
        res.json({ success: true, data: data })
    } catch (error) {
        res.json({ success: false, message: `Error View User server: ${error}` })
    }
})

const port = 1337
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})