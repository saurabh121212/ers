const router = require('express').Router();
const FileController = require('../app/Controllers/FileController')
const uploader = require('../middleware/uploads')

router.post('/banner-image', uploader("image", 5, "bannerImage").single("file"), FileController.uploadFile);

router.post('/gallery-image', uploader("image", 5, "galleryImage").array("file",15), FileController.uploadMultipleFiles);

router.post('/csr-image', uploader("image", 5, "csrImage").single("file"), FileController.uploadFile);

router.post('/news-image', uploader("image", 5, "newsImage").array("file",4), FileController.uploadMultipleFiles);

router.post('/form-files', uploader("document", 5, "formfile").single("file"), FileController.uploadFile);

router.post('/noticeboard-files', uploader("document", 5, "noticeboard").single("file"), FileController.uploadFile);

router.post('/recentapproved-files', uploader("document", 5, "recentapproved").single("file"), FileController.uploadFile);

router.post('/publication-image', uploader("image", 2, "publications").single("file"), FileController.uploadFile);

router.post('/publication-files', uploader("document", 2, "publications").single("file"), FileController.uploadFile);

router.post('/tender-files', uploader("document", 2, "tender").single("file"), FileController.uploadFile);

router.post('/practicenote-files', uploader("document", 5, "practicenote").single("file"), FileController.uploadFile);

router.post('/publicmeeting-image', uploader("image", 5, "publicmeeting").array("file",4), FileController.uploadMultipleFiles);

router.post('/whats-new-files', uploader("document", 2, "whatsnew").single("file"), FileController.uploadFile);

router.post('/about-team-image', uploader("image", 5, "aboutus").array("file",1), FileController.uploadMultipleFiles);


module.exports = router;




