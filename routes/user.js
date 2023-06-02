const router = require('express').Router();
const UserController = require('../app/Controllers/userController');

router.post('/', UserController.createUser);

module.exports = router;