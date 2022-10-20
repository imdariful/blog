const router = require('express').Router();
const userController = require('../controllers/userController');

// Get a user
router
  .route('/:id')
  .get(userController.getUser) // get user
  .put(userController.updateUser) // update a user
  .delete(userController.deleteUser); // delete a user

module.exports = router;
