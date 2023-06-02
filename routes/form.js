const router = require('express').Router();
const formcontroller = require('../app/Controllers/formController');

router.post('/', formcontroller.CreateFormTable);
router.get('/', formcontroller.GetFormDetail);
router.put('/:id',formcontroller.UpdateFormDetail);
router.delete('/:id',formcontroller.DeleteFormDetail)


module.exports = router;
