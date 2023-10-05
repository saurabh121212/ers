const router = require('express').Router();
const galleryImageController = require('../app/Controllers/galleryImagesController');
const auth = require("../middleware/authorize")

// This web-service is use for Image Gallery 
router.post('/',auth(1), galleryImageController.addGalleryImages);
router.get('/', auth(1),galleryImageController.listGalleryImages);
router.get('/web', galleryImageController.listGalleryImagesAccordingToWebsite);
router.delete('/:id',auth(1),galleryImageController.removeGalleryImages);

module.exports = router;