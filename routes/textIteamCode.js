const router = require('express').Router();
const textItemCodeController = require('../app/Controllers/textItemCodeController');
const auth = require("../middleware/authorize")

// This is use for creating a web service for Tex Item Codes Which is in Our Rescources.
router.post('/',auth(1), textItemCodeController.addTextItemCode);
router.get('/', textItemCodeController.listTextItemCode);
router.put('/:id',auth(1),textItemCodeController.updateTextItemCode);
router.delete('/:id',auth(1),textItemCodeController.removeTextItemCode);


module.exports = router;