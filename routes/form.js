const router = require('express').Router();
const formcontroller = require('../app/Controllers/formController');

// This is for forms which is in menu bar.
router.post('/', formcontroller.CreateFormTable);
router.get('/', formcontroller.GetFormDetail);
router.put('/:id',formcontroller.UpdateFormDetail);
router.delete('/:id',formcontroller.DeleteFormDetail)


module.exports = router;
