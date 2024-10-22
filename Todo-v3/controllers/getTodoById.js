const Todo = require("../models/Todo")

exports.getTodoById = async(req,res)=>{
    try{
        //EXTRACT TOD ITEM BY ID
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        if(!todo) {
            res.status(404)
            .json({
                success:false,
                message: "data not found "
            })
        }

        res.status(200)
        .json({
            success:true,
            data: todo,
            message: "data found Successfully"
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data: "No data is fetched",
            message: "server error",
        });
    }
}