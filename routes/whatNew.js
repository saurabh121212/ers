const router = require('express').Router();
const whatNewController = require('../app/Controllers/whatsNewController');
const auth = require("../middleware/authorize")


// This module is use to create the web services for Whats New Section of Website
router.post('/',auth(1), whatNewController.addWhateNew);
router.get('/', whatNewController.listWhateNew);
router.put('/:id',auth(1),whatNewController.updateWhateNew);
router.delete('/:id',auth(1),whatNewController.removeWhateNew);

module.exports = router;