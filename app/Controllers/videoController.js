const { videos } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');


module.exports = {
  addVideo,
  removeVideo,
  listVideos
}

//create
async function addVideo(req, res, next) {
  const { name, description, url, uploadDate } = req.body;
  console.log(videos)
  if (!name) {
    return next({ message: "Missing videos name", status: 400 });
  }

  if (!url) {
    return next({ message: "Missing url", status: 400 });
  }

  try {
    const video = await BaseRepo.baseCreate(videos, { name, description, url, uploadDate });
    res.data = video;
    return next();
    //   return video.toJSON();
  } catch (err) {
    console.log("Err: ", err);
    return next(err);
  }
}


async function listVideos(req, res, next) {
  const params = {
    searchParams: {},
    limit: req.limit,
    offset: req.skip
  }
  try {
    const videoList = await BaseRepo.baseList(videos, params);
    res.data = videoList;
    return next();
  } catch (err) {
    return next(err);
  }
}

//delete
async function removeVideo(req, res, next) {
  if (!req.params.id)
    return next({ message: "Invalid or missing Id", status: 400 });
  try {
    //check if project exist
    const video = await BaseRepo.baseDelete(videos, { id: req.params.id });
    if (!video) return next({ message: "No video found", status: 400 });

    res.data = { message: "video removed successfully", status: 200 };
    return next();
  } catch (err) {
    return next(err);
  }
}