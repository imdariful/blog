const router = require('express').Router();
const userController = require('../controllers/userController');

// SIGNUP
router.post('/signup', userController.createNewUser);

// LOGIN
router.post('/login', userController.loginUser);


module.exports = router;
