const router = require('express').Router();
const contactcontroller = require('../app/Controllers/contactController');

// this web-service is use for Contact Us Page

router.post('/', contactcontroller.CreateContactTable);
router.get('/', contactcontroller.getListcontact);
router.put('/:id',contactcontroller.updatecontact);
router.delete('/:id',contactcontroller.deletecontact)


module.exports = router;
