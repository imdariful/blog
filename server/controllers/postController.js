const User = require('../models/User');
const Post = require('../models/Post');

// Create new post
const createNewPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(201).json({
      message: 'Your post has been successfully shared.',
      data: savedPost,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong! - This post can't be shared",
      data: error,
    });
  }
};

// Update post
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          {
            new: true,
          }
        );
        res.status(200).json({
          message: 'Your post have been saved.',
          data: updatedPost,
        });
      } catch (error) {
        res.status(500).json({
          message: 'We couldn’t save your changes.',
          data: error,
        });
      }
    } else {
      res.status(401).json({
        message: 'Something went wrong!',
        data: error,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      data: error,
    });
  }
};

// Delete post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json({
          message: 'Your post have been deleted.',
        });
      } catch (error) {
        res.status(500).json({
          message: 'We couldn’t save your changes.',
          data: error,
        });
      }
    } else {
      res.status(401).json({
        message: 'You can only delete your post.',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      data: error,
    });
  }
};

// GET Post
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      message: 'User found!',
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      data: error,
    });
  }
};

// GET All Post
const getAllPost = async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    // const post = await Post.findById(req.params.id);
    res.status(200).json({
      message: 'All posts fetched sucessfully.',
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      data: error,
    });
  }
};

module.exports = {
  createNewPost,
  updatePost,
  deletePost,
  getPost,
  getAllPost,
};
