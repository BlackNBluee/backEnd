
const Todo = require("../models/Todo");

//DEFINE ROUTE HANDLER

exports.createTodo = async(req,res) => {
    try{
        //EXTRACT TITLE AND DESCRIPTION FROM REQUEST BODY
        const {title, description } = req.body;
        //CREATE A NEW TODO OBJ AND INSERT IN DB
        const response = await Todo.create({title, description});
        //SEND A JSON RESPONSE WITH A SUCCESS FLAG
        res.status(200).json({
            success:true,
            data: response,
            message: "entry Created Successfully"
        });
    }catch(error){
        console.error(err);
        res.status(500).json({
            success:false,
            data: "internal server error",
            message: err.message
        })
    }
} 