const express = require('express')
const app = express()

const  bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')


app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.post('/addstudent', (req, res) => {
    const { id, lastmame, firstname, middlename, course, year } = req.body
    res.send({ result: 'Success' })
})


const port = 1337
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})