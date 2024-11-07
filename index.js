const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("hello this is created by fork.")
})

app.get('/users', (req, res) => {
    res.send("Sending all userss")
})

app.get('/books', (req, res) => {
    res.send("Sending all books")
})

app.listen(5000,()=>{
    console.log("Running on port 5000")
})
