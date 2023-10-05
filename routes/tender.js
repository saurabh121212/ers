const router = require('express').Router();
const tenderController = require('../app/Controllers/tenderController');
const auth = require("../middleware/authorize")

// This API is used for Publications tow parts Strategic Plans and Annual Reports

router.post('/',auth(1), tenderController.addTender);
router.get('/', auth(1), tenderController.listTender);
router.put('/:id',auth(1),tenderController.updateTender);
router.delete('/:id',auth(1),tenderController.removeTender);



module.exports = router;