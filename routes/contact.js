const router = require('express').Router();
const contactcontroller = require('../app/Controllers/contactController');
const auth = require("../middleware/authorize")

// this web-service is use for Contact Us Page

router.post('/',auth(1), contactcontroller.CreateContactTable);
router.get('/', contactcontroller.getListcontact);
router.put('/:id',auth(1),contactcontroller.updatecontact);
router.delete('/:id',auth(1),contactcontroller.deletecontact)


module.exports = router;
