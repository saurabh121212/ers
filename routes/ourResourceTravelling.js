const router = require('express').Router();
const ourResourceTravellingController = require('../app/Controllers/ourResourceTravellingController');
const auth = require("../middleware/authorize")


// This module is use to create the web services for All FAQ Sections. 
router.post('/',auth(1), ourResourceTravellingController.add);
router.get('/', ourResourceTravellingController.list);
router.put('/:id',auth(1),ourResourceTravellingController.update);
router.delete('/:id',auth(1),ourResourceTravellingController.remove);

module.exports = router;