
const { galleryImages } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
  addGalleryImages,
  listGalleryImages,
  removeGalleryImages,
  listGalleryImagesAccordingToWebsite
}

//create
async function addGalleryImages(req, res, next) {
  let { groupName, imageName, url } = req.body;
  console.log(galleryImages)
  if (!groupName) {
    return next({ message: "Missing group name", status: 400 });
  }
  if (!url) {
    return next({ message: "Missing url", status: 400 });
  }
  let myArray = url.split(",");
  console.log("myArray", myArray);

  for (let i = 0; i < myArray.length; i++) {
    url = myArray[i];
    console.log("url", url);
    let galleryImg = await BaseRepo.baseCreate(galleryImages, { groupName, imageName, url });
  }
  try {
    res.data = {
      "meg": "Gallery Images upload succsessfully"
    };
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

async function listGalleryImagesAccordingToWebsite(req, res, next) {
  const { groupName } = req.query;
  const params = {
    searchParams: {},
  }
  try {
    if (groupName) {
      params.searchParams.groupName = groupName;
    }
    const galleryImgList = await BaseRepo.baseList(galleryImages, params);
    let data = await groupBy(galleryImgList, 'groupName')
    res.data = data;
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


var groupBy = async function (galleryImgList, key) {

  let JSONArrayMain = [];
  // This is just to get acctual list
  for (let i = 0; i < galleryImgList.length; i++) {
    JSONArrayMain.push(galleryImgList[i].dataValues);
  }

  // this function is use to group the array elements. 
  let jsonArraytoRetun = await JSONArrayMain.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
  //console.log(jsonArraytoRetun);
  return jsonArraytoRetun;
};
