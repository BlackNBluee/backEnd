
const Todo = require("../models/Todo");

exports.getTodo = async(req, res) =>{
    try{
        //FETCH ALL ITEMS FROM DB
        const todos = await Todo.find({});

        //RESPONSE
        res.status(200)
        .json({
            success:true,
            data: todos,
            message: "entire data is fetched",
        });
    }
    catch(e){
        console.error(e);
        res.status(500)
        .json({
            success:false,
            data: "No data is fetched",
            message: "server error",
        });
    }
}