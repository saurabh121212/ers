const router = require('express').Router();
const aboutUsController = require('../app/Controllers/aboutUsController');

// This API is used for Publications tow parts Strategic Plans and Annual Reports

router.post('/', aboutUsController.addAboutUsTeam);
router.get('/', aboutUsController.listAboutUsTeam);
router.put('/:id',aboutUsController.updateAboutUsTeam)
router.delete('/:id',aboutUsController.removeAboutUsTeam);


module.exports = router;