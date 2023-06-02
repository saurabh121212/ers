const router = require('express').Router();
const textItemCodeController = require('../app/Controllers/textItemCodeController');

router.post('/', textItemCodeController.addTextItemCode);
 router.get('/', textItemCodeController.listTextItemCode);
 router.delete('/:id',textItemCodeController.removeTextItemCode);

module.exports = router;