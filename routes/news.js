const router = require('express').Router();
const newsController = require('../app/Controllers/newsController');
const auth = require("../middleware/authorize")

// This web service is use for NEWS Section. 
router.post('/',auth(1), newsController.addNews);
router.get('/', newsController.listNews);
router.get('/:id', newsController.singleNewsDetailById); // give single news details by id.
router.put('/:id',auth(1),newsController.updateNews)
router.delete('/:id',auth(1),newsController.removeNews);

module.exports = router;