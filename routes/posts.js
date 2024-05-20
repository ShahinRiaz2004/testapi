const express = require(' express');
const router = express.Router();

const Post = require("../models/Post");

router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err)  {
        res.status(500).json({message: err.message});
    }
});

//Create a new Post

router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    });

    try {
        const newPost = await post.save();
        req.status(201).json(newPost);
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

