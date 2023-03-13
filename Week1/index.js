/*
SIT737 - Cloud Native Applciation Development
Week 1 Online Workshop
*/
const express = require('express');
const app = express();

console.log("Hello World");

//Test

app.get(`/`, (req, res)=> res.send(`Hello World`))

app.listen(3000, () =>{
    console.log(`Sever is listening on port 3000`);
})