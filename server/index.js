// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')

// Middlware
app.use(express.json());
app.use(cors())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public', 'uploads'));
  },
  filename: (req, file, cb) => {
    const fullName =
      'blog_' +
      uuid4().replace(/-/g, '') +
      path.extname(file.originalname);
    cb(null, fullName);
  },
});

const upload = multer({ storage: storage });

// Routes
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/user', require('./routes/userRoute'));
app.use('/api/posts', require('./routes/postRoute'));
app.use('/api/categories', require('./routes/categoryRoute'));
app.post('/api/uploads', upload.single('file'), (req, res) => {
  res.status(200).json({ message: 'File uploaded sucessfully.' });
});

// Connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Database connection established!`)
    );
  })
  .catch((error) => console.log(error));
