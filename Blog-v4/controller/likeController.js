const Post = require('../models/postData')
const Like = require('../models/likeData');

exports.likeController = async (req,res) =>{

    try{
        const{post, user} = req.body;

        const like = new Like({
            post, user
        })

        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(
                post,
            {
                $push:{
                    likes:savedLike._id
                }
            },{
                new:true,
            }
        )
        .populate("likes").exec();

        res.json({
            post: updatedPost,
        })
    }
    catch(error){
        return res.status(500).json({
            error:"error while liking post",
            message: error,
        })
    }
}