const router = require('express').Router();
const publicMeetingController = require('../app/Controllers/publicMeetingController');
const auth = require("../middleware/authorize")

// This web service is use for Public Meetings Section. 
router.post('/',auth(1), publicMeetingController.addPublicMeeting);
router.get('/',auth(1), publicMeetingController.listPublicMeeting);
router.get('/:id',auth(1), publicMeetingController.singlePublicMeetingDetail);
router.put('/:id',auth(1),publicMeetingController.updatePublicMeeting)
router.delete('/:id',auth(1),publicMeetingController.removePublicMeeting);

module.exports = router;