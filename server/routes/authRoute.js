const router = require('express').Router();
const userController = require('../controllers/userController');

// Register
router.post('/register', userController.createNewUser);

// LOGIN
router.post('/login', userController.loginUser);

module.exports = router;
