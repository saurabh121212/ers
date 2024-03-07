const router = require('express').Router();
const ourResourceBusinessController = require('../app/Controllers/ourResourceBusinessController');
const auth = require("../middleware/authorize")


// This module is use to create the web services for All FAQ Sections. 
router.post('/',auth(1), ourResourceBusinessController.add);
router.get('/', ourResourceBusinessController.list);
router.put('/:id',auth(1),ourResourceBusinessController.update);
router.delete('/:id',auth(1),ourResourceBusinessController.remove);

module.exports = router;