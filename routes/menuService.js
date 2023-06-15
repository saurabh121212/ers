const router = require('express').Router();
const menuServicesController = require('../app/Controllers/MenuServicesController');


// This module is use to create the web services for Menu Service Section this is only use for Menus.
router.post('/', menuServicesController.addSubMenu);
router.get('/', menuServicesController.listSubMenu);
router.put('/:id',menuServicesController.updateSubMenu);
router.delete('/:id',menuServicesController.removeSubMenu);

module.exports = router;