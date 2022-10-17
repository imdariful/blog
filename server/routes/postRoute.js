const router = require('express').Router();
const postController = require('../controllers/postController');
// Get a user
router.get('/:id', postController.getPost);

// UPDATE
router.put('/:id', postController.updatePost);

// DELETE
router.delete('/:id', postController.deletePost);

module.exports = router;
