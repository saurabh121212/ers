const router = require('express').Router();
const videoController = require('../app/Controllers/videoController');
const auth = require("../middleware/authorize")

// This is use for creating a web services for Vedio Section
router.post('/',auth(1), videoController.addVideo);
router.get('/',videoController.listVideos);
router.get('/web',auth(1), videoController.listVideosAccordingToWebsite);
router.delete('/:id',auth(1),videoController.removeVideo);

module.exports = router;