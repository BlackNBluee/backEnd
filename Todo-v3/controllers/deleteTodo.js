const Todo = require("../models/Todo")

exports.deleteTodo = async (req,res ) =>{
    try{

        const id = req.params.id;

        const todo = await Todo.findOneAndDelete({_id:id});

        if(!todo){
            return(
                res.status(404)
                .json({
                    success:false,
                    message:"data not found"
                })
            )
        }
        res.status(200)
        .json({
            success: true,
            data: todo,
            message: "deleted successfully"
        })
    }
    catch(err){
        res.status(500)
        .json({
            success: false,
            message: "error"
        })
    }
}