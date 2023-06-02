
const { galleryImages } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
  addGalleryImages,
  listGalleryImages,
  removeGalleryImages
}

//create
async function addGalleryImages(req, res, next) {
  const { groupName, imageName, url } = req.body;
  console.log(galleryImages)
  if (!groupName) {
    return next({ message: "Missing group name", status: 400 });
  }
  if (!url) {
    return next({ message: "Missing url", status: 400 });
  }
  try {
    const galleryImg = await BaseRepo.baseCreate(galleryImages, { groupName, imageName, url });
    res.data = galleryImg;
    return next();
  } catch (err) {
    console.log("Err: ", err);
    return next(err);
  }
}

async function listGalleryImages(req, res, next) {
  const { groupName } = req.query;
  const params = {
    searchParams: {},
    limit: req.limit,
    offset: req.skip
  }
  try {
    if (groupName) {
      params.searchParams.groupName = groupName;
    }
    const galleryImgList = await BaseRepo.baseList(galleryImages, params);
    res.data = galleryImgList;
    return next();
  } catch (err) {
    return next(err);
  }
}

//delete
async function removeGalleryImages(req, res, next) {
  if (!req.params.id)
    return next({ message: "Invalid or missing Id", status: 400 });
  try {
    //check if project exist
    const galleryImg = await BaseRepo.baseDelete(galleryImages, { id: req.params.id });
    if (!galleryImg) return next({ message: "No gallery image found", status: 400 });

    res.data = { message: "gallery image removed successfully", status: 200 };
    return next();
  } catch (err) {
    return next(err);
  }
}

