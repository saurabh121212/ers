const router = require('express').Router();
const AuthController = require('../app/Controllers/AuthController');

router.post('/login', AuthController.logiWithPassword);

module.exports = router;