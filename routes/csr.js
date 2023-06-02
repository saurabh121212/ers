const router = require('express').Router();
const csrController = require('../app/Controllers/csrController');

router.post('/', csrController.addCsr);
router.get('/', csrController.listCsr);
router.put('/:id',csrController.updateCsr)
router.delete('/:id',csrController.removeCsr);


module.exports = router;