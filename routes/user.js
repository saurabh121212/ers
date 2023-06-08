const router = require('express').Router();
const UserController = require('../app/Controllers/userController');

// This is for Admin User
router.post('/', UserController.createUser);

module.exports = router;