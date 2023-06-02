const router = require('express').Router();
const whatNewController = require('../app/Controllers/whatsNewController');

router.post('/', whatNewController.addWhateNew);
router.get('/', whatNewController.listWhateNew);
router.put('/:id',whatNewController.updateWhateNew);
router.delete('/:id',whatNewController.removeWhateNew);

module.exports = router;