const router = require('express').Router();
const FAQController = require('../app/Controllers/FAQController');


// This module is use to create the web services for All FAQ Sections. 
router.post('/', FAQController.addFAQ);
router.get('/', FAQController.listFAQ);
router.put('/:id',FAQController.updateFAQ);
router.delete('/:id',FAQController.removeFAQ);

module.exports = router;