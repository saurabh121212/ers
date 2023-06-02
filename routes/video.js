const router = require('express').Router();
const videoController = require('../app/Controllers/videoController');

router.post('/', videoController.addVideo);
router.get('/', videoController.listVideos);
router.delete('/:id',videoController.removeVideo);

module.exports = router;