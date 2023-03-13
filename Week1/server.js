var express = require(`express`);
var app = express();


app.get(`/`, (req, res)=> res.send(`Hello World`));
app.get(`/cheese`, (req, res) => res.send(`You hit Cheese`));

app.listen(3000, () =>{
    console.log(`Sever is listening on port 3000`);
})