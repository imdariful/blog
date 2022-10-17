const router = require('express').Router();
const userController = require('../controllers/userController');

// Get a user
router.get('/:id', userController.getUser);


// UPDATE
router.put('/:id', userController.updateUser);

// DELETE
router.delete('/:id', userController.deleteUser);

module.exports = router;
