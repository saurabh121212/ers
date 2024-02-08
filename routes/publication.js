const router = require('express').Router();
const publicationController = require('../app/Controllers/publicationController');
const auth = require("../middleware/authorize")

// This API is used for Publications tow parts Strategic Plans and Annual Reports

router.post('/',auth(1), publicationController.addPublication);
router.get('/', publicationController.listPublication);
router.put('/:id',auth(1),publicationController.updatePublication)
router.delete('/:id',auth(1),publicationController.removePublication);


module.exports = router;