const router = require('express').Router();
const csrController = require('../app/Controllers/csrController');


// This is use for Corporate Social Responsibility web-services

router.post('/', csrController.addCsr);
router.get('/', csrController.listCsr);
router.put('/:id',csrController.updateCsr)
router.delete('/:id',csrController.removeCsr);


module.exports = router;