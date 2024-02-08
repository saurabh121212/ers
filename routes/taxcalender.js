const router = require('express').Router();
const taxcontroller = require('../app/Controllers/taxcalenderController');
const auth = require("../middleware/authorize")

// This is use to create a web-service for Tex Calander. 
router.post('/',auth(1), taxcontroller.CreateTaxTable);
router.get('/',taxcontroller.getTaxDetail);
router.put('/:id',auth(1),taxcontroller.updateTaxDetail);
router.delete('/:id',auth(1),taxcontroller.deleteTaxDetail)

module.exports = router;
