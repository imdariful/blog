const blogController = require('../controllers/blogController')
const express = require('express')
const router = express.Router();



// Home route
router.get('/', blogController.getHome)



module.exports = router





