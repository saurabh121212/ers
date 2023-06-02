const router = require('express').Router();
const mediaController = require('../app/Controllers/mediaController');

router.get('/', mediaController.listMedia);


module.exports = router;