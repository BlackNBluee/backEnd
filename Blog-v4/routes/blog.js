const express = require('express');
const router = express.Router();

//IMPORT CONTROLLER
const { getAllPosts, postController } = require('../controller/postController');
const { commentController } = require('../controller/commentController');
const { likeController } = require('../controller/likeController');
const { unlikeController } = require('../controller/unlikeController');


//MAPPING CONTROLLERS
router.get("/posts", getAllPosts);
router.post("/posts/create", postController);
router.post ("/comments/create", commentController);
router.post("/likes/like", likeController);
router.delete("/likes/unlike", unlikeController);


//EXPORT
module.exports = router;