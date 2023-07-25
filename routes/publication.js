const router = require('express').Router();
const publicationController = require('../app/Controllers/publicationController');

// This API is used for Publications tow parts Strategic Plans and Annual Reports

router.post('/', publicationController.addPublication);
router.get('/', publicationController.listPublication);
router.put('/:id',publicationController.updatePublication)
router.delete('/:id',publicationController.removePublication);


module.exports = router;