const router = require('express').Router();
const taxcontroller = require('../app/Controllers/taxcalenderController');

router.post('/', taxcontroller.CreateTaxTable);
router.get('/', taxcontroller.getTaxDetail);
router.put('/:id',taxcontroller.updateTaxDetail);
router.delete('/:id',taxcontroller.deleteTaxDetail)


module.exports = router;
