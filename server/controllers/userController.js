const bcrypt = require('bcrypt');
const User = require('../models/User');
const Post = require('../models/Post');
// Get Signup
const createNewUser = async (req, res) => {
  try {
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(201).json({
      message:
        'Thanks for signing up. Your account has been created.',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong! - Please try again later.',
      data: error,
    });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    !user &&
      res.status(400).json({
        data: 'Wrong credentials!',
      });

    const validate = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validate &&
      res.status(400).json({
        data: 'Wrong credentials!',
      });

    // Return user data except password
    const { password, ...others } = user._doc;
    res.status(200).json({
      message: 'Logged in.',
      data: others,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      data: error,
    });
  }
};

// Update user
const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true, // for getting updated user details
        }
      );

      res.status(200).json({
        message: 'Your account details have been saved.',
        data: updateUser,
      });
    } catch (error) {
      res.status(500).json({
        message: `We couldn’t save your changes.`,
        data: error,
      });
    }
  } else {
    res.status(401).json({
      message: 'You can update only your account.',
      data: error,
    });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);

      try {
        await Post.deleteMany({
          username: user.username,
        });

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
          message: 'We are sad with with your Goodbye!',
        });
      } catch (error) {
        res.status(500).json({
          message: 'Something went wrong!',
          data: error,
        });
      }
    } catch (error) {
      res.status(404).json({
        message: 'User not found!',
        data: error,
      });
    }
  } else {
    res.status(401).json({
      message: 'You can delete only your account.',
      data: error,
    });
  }
};

// GET USER
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...data } = user._doc;
    res.status(200).json({
      message: 'User found!',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      data: error,
    });
  }
};

module.exports = {
  createNewUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
};
