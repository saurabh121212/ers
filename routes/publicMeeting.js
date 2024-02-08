const router = require('express').Router();
const publicMeetingController = require('../app/Controllers/publicMeetingController');
const auth = require("../middleware/authorize")

// This web service is use for Public Meetings Section. 
router.post('/',auth(1), publicMeetingController.addPublicMeeting);
router.get('/', publicMeetingController.listPublicMeeting);
router.get('/:id', publicMeetingController.singlePublicMeetingDetail);
router.put('/:id',auth(1),publicMeetingController.updatePublicMeeting)
router.delete('/:id',auth(1),publicMeetingController.removePublicMeeting);

module.exports = router;