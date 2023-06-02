const router = require('express').Router();
const recentlyApprovedController = require('../app/Controllers/recentlyApprovedController');

router.post('/', recentlyApprovedController.addRecetlyApproved);
router.get('/', recentlyApprovedController.listRecetlyApproved);
router.put('/:id',recentlyApprovedController.updateRecetlyApproved)
router.delete('/:id',recentlyApprovedController.removeRecetlyApproved);


module.exports = router;