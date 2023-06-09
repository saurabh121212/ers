const router = require('express').Router();
const FileController = require('../app/Controllers/FileController')
const uploader = require('../middleware/uploads')

router.post('/banner-image', uploader("image", 5, "bannerImage").single("file"), FileController.uploadFile);

router.post('/gallery-image', uploader("image", 5, "galleryImage").array("file",15), FileController.uploadMultipleFiles);

router.post('/csr-image', uploader("image", 5, "csrImage").single("files"), FileController.uploadFile);

router.post('/news-image', uploader("image", 5, "newsImage").array("file",4), FileController.uploadMultipleFiles);

router.post('/form-files', uploader("document", 5, "formImage").single("file"), FileController.uploadFile);



module.exports = router;




