const { publicmeeting } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
    addPublicMeeting,
    listPublicMeeting,
    updatePublicMeeting,
    removePublicMeeting,
    singlePublicMeetingDetail
}

//create
async function addPublicMeeting(req, res, next) {
    const { publicMeetingName, uploadDate, description, url } = req.body;
    if (!publicMeetingName) {
      return next({ message: "Missing Public Meeting name", status: 400 });
    }
    if (!url) {
      return next({ message: "Missing url", status: 400 });
    }
    try {
      const  publicMeetings= await BaseRepo.baseCreate(publicmeeting, { publicMeetingName, uploadDate, description, url });
      res.data = publicMeetings;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }

//update
async function updatePublicMeeting(req, res, next) {
  const { id } = req.params;
  console.log(id)
  if (!id) {
    return next({ message: "Missing public Meeting ID", status: 400 });
  }

  const updateData = {};
  if (req.body.publicMeetingName) {
    updateData.publicMeetingName = req.body.publicMeetingName;
  }
  if (req.body.uploadDate) {
    updateData.uploadDate = req.body.uploadDate;
  }
  if (req.body.description) {
    updateData.description = req.body.description;
  }
  if (req.body.url) {
    updateData.url = req.body.url;
  }

  try {
    await BaseRepo.baseUpdate(publicmeeting, { id }, updateData);
    return next();
  } catch (err) {
    return next(err);
  }
}


async function singlePublicMeetingDetail(req, res, next) {
  const params = {
    searchParams: {},
    limit: req.limit,
    offset: req.skip,
    id: req.params.id
  }
  try {
    const publicMeetings = await BaseRepo.baseFindById(publicmeeting, params);
    res.data = publicMeetings;
    return next();
  } catch (err) {
    return next(err);
  }
}


async function listPublicMeeting(req, res, next) {
  const params = {
    searchParams: {},
    limit: req.limit,
    offset: req.skip,
    order:[["id","DESC"]],

  }
  try {
    const publicMeetings = await BaseRepo.baseList(publicmeeting, params);
    res.data = publicMeetings;
    return next();
  } catch (err) {
    return next(err);
  }
}

//delete
async function removePublicMeeting(req, res, next) {
  if (!req.params.id)
    return next({ message: "Invalid or missing Id", status: 400 });
  try {
    //check if project exist
    const publicMeetings = await BaseRepo.baseDelete(publicmeeting, { id: req.params.id });
    if (!publicMeetings) return next({ message: "No Public Meeting found", status: 400 });

    res.data = { message: "Public Meeting removed successfully", status: 200 };
    return next();
  } catch (err) {
    return next(err);
  }
}