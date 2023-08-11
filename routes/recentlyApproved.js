const router = require('express').Router();
const recentlyApprovedController = require('../app/Controllers/recentlyApprovedController');

// This is use for Recent Approved Web services. use for Recently Approved Guidelines , Recently Approved Forms , Publications
router.post('/', recentlyApprovedController.addRecetlyApproved);
router.get('/', recentlyApprovedController.listRecetlyApproved);
router.put('/:id',recentlyApprovedController.updateRecetlyApproved)
router.delete('/:id',recentlyApprovedController.removeRecetlyApproved);

module.exports = router;