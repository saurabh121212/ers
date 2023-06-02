const router = require('express').Router();
const noticeBoardController = require('../app/Controllers/noticeBoardController');

router.post('/', noticeBoardController.addNoticeBoard);
router.get('/', noticeBoardController.listNoticeBoard);
router.put('/:id',noticeBoardController.updateNoticeBoard)
router.delete('/:id',noticeBoardController.removeNoticeBoard);


module.exports = router;