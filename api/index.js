const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://arifulrony10:fCJgup1pTqjYrru7@mern-blog-cluster.ewq6my0.mongodb.net/?retryWrites=true&w=majority'
);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password,
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// arifulrony10   fCJgup1pTqjYrru7
// mongodb+srv://arifulrony10:fCJgup1pTqjYrru7@mern-blog-cluster.ewq6my0.mongodb.net/?retryWrites=true&w=majority

app.listen(4000);
