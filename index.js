const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("hello this is created by fork.")
})

app.listen(5000,()=>{
    console.log("Running on port 5000")
})