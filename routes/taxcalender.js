const router = require('express').Router();
const taxcontroller = require('../app/Controllers/taxcalenderController');

// This is use to create a web-service for Tex Calander. 
router.post('/', taxcontroller.CreateTaxTable);
router.get('/', taxcontroller.getTaxDetail);
router.put('/:id',taxcontroller.updateTaxDetail);
router.delete('/:id',taxcontroller.deleteTaxDetail)


module.exports = router;
