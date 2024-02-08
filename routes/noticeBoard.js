const router = require('express').Router();
const noticeBoardController = require('../app/Controllers/noticeBoardController');
const auth = require("../middleware/authorize")

// This API is use for Notice Board module which is coverd by these APIs are Public Notices

router.post('/', auth(1),noticeBoardController.addNoticeBoard);
router.get('/',noticeBoardController.listNoticeBoard);
router.put('/:id',auth(1),noticeBoardController.updateNoticeBoard)
router.delete('/:id',auth(1),noticeBoardController.removeNoticeBoard);


module.exports = router;