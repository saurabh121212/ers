const router = require('express').Router();
const UserController = require('../app/Controllers/userController');
const auth = require("../middleware/authorize")

// This is for Admin User
router.post('/',auth(1), UserController.createUser);

module.exports = router;