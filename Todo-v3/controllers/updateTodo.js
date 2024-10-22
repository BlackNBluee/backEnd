const Todo = require("../models/Todo")

exports.updateTodo = async(req,res)=>{
    try{
        //EXTRACT TODO ITEM BY ID
        const {id} = req.params;
        const {title}  = req.body;
        const todo = await Todo.findByIdAndUpdate({_id: id},{
            title,
            updatedAt: Date.now()
        });

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
            data: "No data is fetched : " + err,
            message: "server error",
        });
    }
}