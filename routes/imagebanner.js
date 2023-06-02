const router = require('express').Router();
const imagebannercontroller = require('../app/Controllers/imagebannercontroller');

router.post('/', imagebannercontroller.createimagebanner);
router.get('/', imagebannercontroller.getAllImageBanners);
router.put('/:id',imagebannercontroller.updateAllImageBanners);
router.delete('/:id', imagebannercontroller.deleteImageBanners);


module.exports = router;
