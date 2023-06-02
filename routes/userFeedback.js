const router = require('express').Router();
const UserFeedbackController = require('../app/Controllers/UserFeedbackController');

router.post('/', UserFeedbackController.addFeedback);
 router.get('/', UserFeedbackController.listUserFeedback);
 router.put('/:id',UserFeedbackController.removeUserFeedback);

module.exports = router;