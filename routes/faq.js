const router = require('express').Router();
const FAQController = require('../app/Controllers/FAQController');
const auth = require("../middleware/authorize")


// This module is use to create the web services for All FAQ Sections. 
router.post('/',auth(1), FAQController.addFAQ);
router.get('/', FAQController.listFAQ);
router.put('/:id',auth(1),FAQController.updateFAQ);
router.delete('/:id',auth(1),FAQController.removeFAQ);

module.exports = router;