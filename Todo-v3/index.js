
const express = require('express');
const app = express();
require("dotenv").config();

//LOAD CONFIG FROM ENV FILE
const PORT = process.env.PORT || 4000;
//MIDDLEWARE TO PARSE JSON REQUEST BODY
app.use(express.json());

//IMPORT ROUTES FOR TODO API
const todoRoutes = require('./routes/todos')

//MOUNT THE TODO API ROUTES
app.use("/api/v1", todoRoutes);

//START SERVER
app.listen(PORT,()=>{
    console.log(`app running ${PORT}`);
})

//CONNECT TO DB
const dbConnect = require("./config/database");
dbConnect();

//DEFAULT ROUTE
app.get("/", (req, res)=>{
    res.send('<h1>this is Home page</h1>');
});