const router = require('express').Router();
const postController = require('../controllers/postController');

router
  .route('/')
  .get(postController.getAllPost)
  .post(postController.createNewPost);

router
  .route('/:id')
  .get(postController.getPost) // Get a user
  .put(postController.updatePost) // UPDATE
  .delete(postController.deletePost); // DELETE

module.exports = router;
