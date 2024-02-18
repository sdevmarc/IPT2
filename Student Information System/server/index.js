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

// app.post('/editstudent', (req, res) => {
//     const updatedStudent = req.body;

//     try {
//         let existingData = JSON.parse(fs.readFileSync('students.json'));
//         // Find the index of the student to be updated
//         const index = existingData.findIndex(student => student.id === updatedStudent.id);
//         if (index !== -1) {
//             // Update the student data at the found index
//             existingData[index] = updatedStudent;
//             fs.writeFileSync('students.json', JSON.stringify(existingData, null, 1));
//             res.json({ success: true, message: 'Student updated successfully' });
//         } else {
//             res.status(404).json({ success: false, message: 'Student not found' });
//         }
//     } catch (error) {
//         console.error("Error editing student data", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

const port = 1337
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})