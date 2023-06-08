const router = require('express').Router();
const galleryImageController = require('../app/Controllers/galleryImagesController');

// This web-service is use for Image Gallery 
router.post('/', galleryImageController.addGalleryImages);
router.get('/', galleryImageController.listGalleryImages);
router.delete('/:id',galleryImageController.removeGalleryImages);

module.exports = router;