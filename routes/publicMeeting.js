const router = require('express').Router();
const publicMeetingController = require('../app/Controllers/publicMeetingController');

// This web service is use for Public Meetings Section. 
router.post('/', publicMeetingController.addPublicMeeting);
router.get('/', publicMeetingController.listPublicMeeting);
router.get('/:id', publicMeetingController.singlePublicMeetingDetail);
router.put('/:id',publicMeetingController.updatePublicMeeting)
router.delete('/:id',publicMeetingController.removePublicMeeting);

module.exports = router;