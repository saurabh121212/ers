const router = require('express').Router();
const galleryImageController = require('../app/Controllers/galleryImagesController');
const auth = require("../middleware/authorize")

// This web-service is use for Image Gallery 
router.post('/',auth(1), galleryImageController.addGalleryImages);
router.get('/', auth(1),galleryImageController.listGalleryImages);

// // This web service is use to update the group images. 
// router.put('/:groupName', auth(1), galleryImageController.UpdateGalleryImages);

router.get('/web', galleryImageController.listGalleryImagesAccordingToWebsite);

// This web service is for deleteting a single image in the image group 
router.delete('/:id',auth(1),galleryImageController.removeGalleryImages);

// This web service is for deleteting a group of images 
router.delete('/group-delete/:groupName',auth(1),galleryImageController.removeImageGroup);


module.exports = router;