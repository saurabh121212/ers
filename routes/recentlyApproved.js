const router = require('express').Router();
const recentlyApprovedController = require('../app/Controllers/recentlyApprovedController');
const auth = require("../middleware/authorize")

// This is use for Recent Approved Web services. use for Recently Approved Guidelines , Recently Approved Forms , Publications
router.post('/',auth(1), recentlyApprovedController.addRecetlyApproved);
router.get('/', recentlyApprovedController.listRecetlyApproved);
router.put('/:id',auth(1),recentlyApprovedController.updateRecetlyApproved)
router.delete('/:id',auth(1),recentlyApprovedController.removeRecetlyApproved);

module.exports = router;