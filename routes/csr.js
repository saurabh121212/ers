const router = require('express').Router();
const csrController = require('../app/Controllers/csrController');
const auth = require("../middleware/authorize")


// This is use for Corporate Social Responsibility web-services

router.post('/', auth(1),csrController.addCsr);
router.get('/',auth(1), csrController.listCsr);
router.put('/:id',auth(1),csrController.updateCsr)
router.delete('/:id',auth(1),csrController.removeCsr);


module.exports = router;