const router = require('express').Router();
const tenderController = require('../app/Controllers/tenderController');

// This API is used for Publications tow parts Strategic Plans and Annual Reports

router.post('/', tenderController.addTender);
router.get('/', tenderController.listTender);
router.put('/:id',tenderController.updateTender)
router.delete('/:id',tenderController.removeTender);


module.exports = router;