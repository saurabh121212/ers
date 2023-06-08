const router = require('express').Router();
const newsController = require('../app/Controllers/newsController');

// This web service is use for NEWS Section. 
router.post('/', newsController.addNews);
router.get('/', newsController.listNews);
router.put('/:id',newsController.updateNews)
router.delete('/:id',newsController.removeNews);


module.exports = router;