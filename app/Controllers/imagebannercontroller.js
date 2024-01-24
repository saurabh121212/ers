'use strict'

const { bannerImages } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');


module.exports = {
  createimagebanner,
  getAllImageBanners,
  updateAllImageBanners,
  deleteImageBanners

}

//create
async function createimagebanner(req, res, next) {
  const { imageName, link, description, imageurl, uploadDate } = req.body;
  console.log(bannerImages)
  if (!imageName) {
    return next({ message: "Missing imagename", status: 400 });
  }
  if (!link) {
    return next({ message: "Missing link", status: 400 });
  }
  if (!imageurl) {
    return next({ message: "Missing imageurl" })
  }
  if (!uploadDate) {
    return next({ message: "Missing upload date" })
  }

  try {
    const imagebanners = await BaseRepo.baseCreate(bannerImages, { imageName, link, description, imageurl, uploadDate });
    res.data = imagebanners;
    return next()
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function getAllImageBanners(req, res, next) {
  const params = {
    searchParams: {},
    order:[["id","DESC"]],
    limit: 5,
  }
  try {
    const getimages = await BaseRepo.baseList(bannerImages,params);
    res.data = getimages;
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function updateAllImageBanners(req, res, next) {
  const { id } = req.params;
  const { imageName, link, description, imageurl, uploadDate } = req.body;
  try {
    const updatebanner = await BaseRepo.baseUpdate(bannerImages, { id }, { imageName, link, description, imageurl, uploadDate });
    res.data = { message: "updated succesfully", status: 200 };
    return next();
  }
  catch (err) {
    console.log(err)
    return next(err)
  }
}


async function deleteImageBanners(req, res, next) {
  if (!req.params.id)
    return next({ message: "Invalid or missing Id", status: 400 });
  try {
    //check if project exist
    const bannerImg = await BaseRepo.baseDelete(bannerImages, { id: req.params.id });
    if (!bannerImg) return next({ message: "No banner image found", status: 400 });

    res.data = { message: "banner images removed successfully", status: 200 };
    return next();
  } catch (err) {
    return next(err);
  }
}



