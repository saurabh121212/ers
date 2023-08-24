const router = require('express').Router();
const textItemCodeController = require('../app/Controllers/textItemCodeController');

// This is use for creating a web service for Tex Item Codes Which is in Our Rescources.
router.post('/', textItemCodeController.addTextItemCode);
router.get('/', textItemCodeController.listTextItemCode);
router.put('/:id',textItemCodeController.updateTextItemCode);
router.delete('/:id',textItemCodeController.removeTextItemCode);


module.exports = router;