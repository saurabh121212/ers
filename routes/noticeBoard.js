const router = require('express').Router();
const noticeBoardController = require('../app/Controllers/noticeBoardController');

// This API is use for Notice Board module two modules which is coverd by these APIs are Public Notices and Public Meetings

router.post('/', noticeBoardController.addNoticeBoard);
router.get('/', noticeBoardController.listNoticeBoard);
router.put('/:id',noticeBoardController.updateNoticeBoard)
router.delete('/:id',noticeBoardController.removeNoticeBoard);


module.exports = router;