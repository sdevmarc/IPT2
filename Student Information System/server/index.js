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
    const { id, lastname, firstname, middlename, course, year } = req.body

    let existingData = []
    try {
        existingData = JSON.parse(fs.readFileSync('students.json'))
    } catch (error) {
        // res.json({ Error: error })
    }

    existingData.push(id, lastname, firstname, middlename, course, year)

    fs.writeFileSync('students.json', JSON.stringify(existingData, null,2))
    res.json({ success: true, message: 'Student added successfully' })

})


const port = 1337
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})