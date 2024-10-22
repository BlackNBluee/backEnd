const Post = require('../models/postData');

exports.postController = async (req,res) =>{
    try{

        const {title, body} = req.body;
        const post = new Post({
            title,body
        })
        const savedPost = await post.save();
        res.json({
            post: savedPost,
        })
    }

    catch(error){
        return res.status(400).json({
            message: "error occured while creating post",
            error: error
        })

    }
}

exports.getAllPosts = async (req,res) =>{
    try{
        const posts = await Post.find({});

        if(posts.length == 0){
            return(
                res.json({
                    message: "no posts available"
                })
            );
        }
        res.json({
            allPosts: posts
        })
    }
    catch(error){
        res.json({
            messgae: "error occured while getting all posts"
        })
    }
}