const router = require('express').Router();
const imagebannercontroller = require('../app/Controllers/imagebannercontroller');
const auth = require("../middleware/authorize")

// This is use for creating a web-service of Home Banner Images.  

router.post('/',auth(1), imagebannercontroller.createimagebanner);
router.get('/', imagebannercontroller.getAllImageBanners);
router.put('/:id',auth(1),imagebannercontroller.updateAllImageBanners);
router.delete('/:id',auth(1), imagebannercontroller.deleteImageBanners);


module.exports = router;
