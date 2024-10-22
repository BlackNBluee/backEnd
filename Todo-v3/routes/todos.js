
const express = require('express');
const router = express.Router();

//IMPORT CONTROLLER
const {createTodo } = require("../controllers/createTodo")
const {getTodo} = require("../controllers/getTodo");
const { getTodoById } = require('../controllers/getTodoById');
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");


//DEFINE API ROUTES
router.post("/createTodo", createTodo);
//API TO GET ALL DATA
router.get("/getTodos", getTodo);
// API TO GET DATA OF SPECIFIC ID PASSED IN URL
router.get("/getTodos/:id", getTodoById);
//API  TO UPDATE DATA USING ID PASSED IN URL
// AND DATA TO BE UPDATED IS PASSED IN REQUEST 
router.put("/updateTodo/:id", updateTodo);
//DELETE DATA
router.delete("/deleteTodo/:id", deleteTodo);


module.exports = router; 