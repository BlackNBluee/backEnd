//IMPORT MODELS
const Post = require('../models/postData')
const Comment = require('../models/commentData')

//BUSINESS LOGIC
exports.commentController = async (req,res) =>{
    try{

        //  FETCH DATA FROM REQ BODY
        const {post, user, body} = req.body;

        //CREATE A COMMENT OBJECT
        const comment = new Comment({
            post, user, body
        });
        

        //SAVE NEW COMMENT INTO DB
        const savedComment = await comment.save();

        //FIND THE POST BY ID AND ADD NEW COMMENT TO ITS COMMENTS ARRAY
        const updatedPost = await Post.findByIdAndUpdate(
             post,
            {
                $push:{         //push update in comments 
                    comments: savedComment._id
                }
            },
            {
                new:true        //return the updated document 
            }
        )

        res.json({
            post: updatedPost,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"error while creating comment",
            message: error,
        })

    }
}

