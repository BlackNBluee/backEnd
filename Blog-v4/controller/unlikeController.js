const Post = require('../models/postData')
const Like = require('../models/likeData');
const mongoose = require('mongoose')

exports.unlikeController = async (req,res) =>{

    try{
        const {post, user} = req.body;
        // Cast post to ObjectId (leave user as string)
        const postID = new mongoose.Types.ObjectId(post);
        console.log("Request Body Post:", typeof(postID));

        const deletedLike = await Like.findOneAndDelete(
            {
                post:postID,user
            }
        )

        if(!deletedLike){
            return(
                res.json({
                    message: "No data found ",
                })
            )
        }

        const updatedPost = await Post.findByIdAndUpdate(
                postID,
            {
                $pull:{
                    likes:deletedLike._id
                }
            },{
                new:true,
            }
        )

        res.json({
            post: updatedPost,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            error:"error while liking post",
            message: error,
        })
    }
}