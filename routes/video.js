const router = require('express').Router();
const videoController = require('../app/Controllers/videoController');

// This is use for creating a web services for Vedio Section
router.post('/', videoController.addVideo);
router.get('/', videoController.listVideos);
router.delete('/:id',videoController.removeVideo);

module.exports = router;