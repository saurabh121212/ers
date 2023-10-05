const router = require('express').Router();
const menuServicesController = require('../app/Controllers/MenuServicesController');
const auth = require("../middleware/authorize")


// This module is use to create the web services for Menu Service Section this is only use for Menus.
router.post('/',auth(1), menuServicesController.addSubMenu);
router.get('/', auth(1),menuServicesController.listSubMenu);
router.put('/:id', auth(1),menuServicesController.updateSubMenu);
router.delete('/:id',auth(1),menuServicesController.removeSubMenu);

module.exports = router;