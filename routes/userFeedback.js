const router = require('express').Router();
const UserFeedbackController = require('../app/Controllers/UserFeedbackController');

// This is use for creating a web service for User Feedback module.
router.post('/', UserFeedbackController.addFeedback);
 router.get('/', UserFeedbackController.listUserFeedback);
 router.put('/:id',UserFeedbackController.removeUserFeedback);

module.exports = router;