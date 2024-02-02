const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())
app.get('/', (req, res) => {
    res.json('Hello, world!')
})


const port = 1337
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})