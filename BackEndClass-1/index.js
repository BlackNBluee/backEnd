
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(port, () =>{
    console.log("Server started at port 3000");
})

app.get("/", (req, res) =>{
    res.send("<h1>Hello Jee</h1>");
})

app.post("/api/cars", (req,res)=>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("<h1>recieved brand: </h1>"+brand+"<h1> data</h1>")
})

const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/myDataBase', {
    useNewurlParser: true,
    useUnifiedTopology:true
})
.then(()=> console.log("connection is successful"))
.catch((error) =>{alert("Error occured while connecting")});