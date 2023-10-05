const router = require('express').Router();
const formcontroller = require('../app/Controllers/formController');
const auth = require("../middleware/authorize")

// This is for forms which is in menu bar.
router.post('/',auth(1), formcontroller.CreateFormTable);
router.get('/',auth(1), formcontroller.GetFormDetail);
router.put('/:id', auth(1), formcontroller.UpdateFormDetail);
router.delete('/:id',auth(1), formcontroller.DeleteFormDetail)


module.exports = router;
