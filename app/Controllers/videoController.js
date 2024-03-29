const { videos } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');


module.exports = {
  addVideo,
  removeVideo,
  listVideos,
  listVideosAccordingToWebsite
}

//create
async function addVideo(req, res, next) {
  const { name, description, url, uploadDate, yearofupload } = req.body;
  console.log(videos)
  if (!name) {
    return next({ message: "Missing videos name", status: 400 });
  }

  if (!url) {
    return next({ message: "Missing url", status: 400 });
  }

  try {
    const video = await BaseRepo.baseCreate(videos, { name, description, url, uploadDate, yearofupload });
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
    order:[["id","DESC"]]
    
  }
  try {
    const videoList = await BaseRepo.baseList(videos, params);
    res.data = videoList;
    return next();
  } catch (err) {
    return next(err);
  }
}

async function listVideosAccordingToWebsite(req, res, next) {
  const params = {
    searchParams: {},
    order:[["id","DESC"]]
    
  }
  try {
    const videoList = await BaseRepo.baseList(videos, params);
    //    let data = await groupBy(videoList, 'yearofupload')
    let data = await videoListingWeb(videoList)
    console.log("Data ", data);
    res.data = data;
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


var groupBy = async function (videoList, key) {

  let JSONArrayMain = [];
  // This is just to get acctual list
  for (let i = 0; i < videoList.length; i++) {
    JSONArrayMain.push(videoList[i].dataValues);
  }

  // this function is use to group the array elements. 
  let jsonArraytoRetun = await JSONArrayMain.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
  //console.log(jsonArraytoRetun);
  return jsonArraytoRetun;
};



async function videoListingWeb(videoList) {
  let originalData = [];

  for (let i = 0; i < videoList.length; i++) {
    originalData.push(videoList[i].dataValues);
  }

  let groupedVideos = {};

  // Step 2: Loop through each video
  for (let video of originalData) {
    //console.log(originalData);
    // Step 3: Check and group
    if (!groupedVideos[video.yearofupload]) {
      groupedVideos[video.yearofupload] = [];
    }
    groupedVideos[video.yearofupload].push(video);
  }

  // Step 4: Convert to the desired format
  let resultData = {
    yearwisearray: []
  };

  for (let year in groupedVideos) {
    resultData.yearwisearray.push({
      yearofupload: year,
      video: groupedVideos[year]
    });
  }

  return resultData;

}



