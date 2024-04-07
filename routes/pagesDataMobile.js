const router = require('express').Router();
const pagesDataMobileController = require('../app/Controllers/pagesDataMobileController');
const auth = require("../middleware/authorize")

//This API is use for Pages Data for Mobile module which is coverd by these APIs

router.post('/', auth(1),pagesDataMobileController.addPageData);
router.get('/',pagesDataMobileController.listPageData);
router.put('/:id',auth(1),pagesDataMobileController.updatePageData)
router.delete('/:id',auth(1),pagesDataMobileController.removePageData);


router.get('/search',pagesDataMobileController.listSearchData);

module.exports = router;