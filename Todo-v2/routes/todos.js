
const express = require('express');
const router = express.Router();

//IMPORT CONTROLLER
const {createTodo } = require("../controllers/createTodo")

//DEFINE API ROUTES
router.post("/createTodo", createTodo);

module.exports = router;