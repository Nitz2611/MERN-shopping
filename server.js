const express = require('express')
const colors = require('colors')
//rest object
const app = express()

//rest api
app.get('/', (req, res) => {
    res.send(
        '<h1>Welcome to ecommerce app</h1>'
    )
})

//PORT
const PORT = 8080

//run listen
app.listen(PORT, () => {
    console.log(`Server is runnin on ${PORT}`.bgCyan.white);
})