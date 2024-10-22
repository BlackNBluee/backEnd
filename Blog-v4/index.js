const express = require('express');
const app = express();
require('dotenv').config();

//IMPORT ROUTE
const blog = require('./routes/blog');
const { dbConnect } = require('./config/dbConnect');


const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", blog);
app.listen(PORT, () =>{
    console.log(`On port ${PORT}`);
})

dbConnect();

app.get("/", (req, res)=>{
    res.send("<h1>This is blog site</h1>");
})