const router = require('express').Router();
const aboutUsController = require('../app/Controllers/aboutUsController');
const auth = require("../middleware/authorize")

// This API is used for Publications tow parts Strategic Plans and Annual Reports

router.post('/', auth(1),aboutUsController.addAboutUsTeam);
router.get('/', aboutUsController.listAboutUsTeam);
router.put('/:id',auth(1),aboutUsController.updateAboutUsTeam)
router.delete('/:id',auth(1),aboutUsController.removeAboutUsTeam);


module.exports = router;