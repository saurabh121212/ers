const router = require('express').Router();
const noticeBoardController = require('../app/Controllers/noticeBoardController');

// This API is use for Notice Board module which is coverd by these APIs are Public Notices

router.post('/', noticeBoardController.addNoticeBoard);
router.get('/', noticeBoardController.listNoticeBoard);
router.put('/:id',noticeBoardController.updateNoticeBoard)
router.delete('/:id',noticeBoardController.removeNoticeBoard);


module.exports = router;