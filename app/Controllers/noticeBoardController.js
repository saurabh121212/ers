
const {noticeBoard} = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');
const {NOTICE_BOARD_TYPES} = require('app/Constants/constant');


module.exports = {
    addNoticeBoard,
    listNoticeBoard,
    removeNoticeBoard,
    updateNoticeBoard
}

//create
async function addNoticeBoard(req, res, next) {
    const {name,description,date,notice,documentName, documentUrl } = req.body;
    if (!name) {
      return next({ message: "Missing Public Notice name", status: 400 });
    }
    if (!date) {
      return next({ message: "Missing Public Notice date", status: 400 });
    }
    if (!notice) {
      return next({ message: "Missing Public Notice notice", status: 400 });
    }
    if (!documentName) {
        return next({ message: "Missing documentName", status: 400 });
      }
    if (!documentUrl) {
      return next({ message: "Missing url", status: 400 });
    }
    try {
      const  noticeBoards= await BaseRepo.baseCreate(noticeBoard, {name,date,notice, description, documentName, documentUrl });
      res.data = noticeBoards;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }

  //update
  async function updateNoticeBoard(req, res, next) {
    const { id } = req.params;
  console.log(id)
    if (!id) {
      return next({ message: "Missing Public Notice ID", status: 400 });
    }
  
    const updateData = {};
    if (req.body.name) {
      updateData.name = req.body.name;
    }
    if (req.body.date) {
      updateData.date = req.body.date;
    }
    if (req.body.notice) {
      updateData.notice = req.body.notice;
    }
    if (req.body.description) {
      updateData.description = req.body.description;
    }
    if (req.body.documentName) {
      updateData.documentName = req.body.documentName;
    }
    if (req.body.documentUrl) {
      updateData.documentUrl = req.body.documentUrl;
    }
  
    try {
      await BaseRepo.baseUpdate(noticeBoard, { id }, updateData);
      return next();
    } catch (err) {
      return next(err);
    }
  }
  

  async function listNoticeBoard(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip,
      order:[["id","DESC"]],
  }
    try {
        const noticeBoards = await BaseRepo.baseList(noticeBoard, params);
        res.data = noticeBoards;
        return next();
    } catch (err) {
        return next(err);
    }
}

//delete
async function removeNoticeBoard(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const noticeBoards = await BaseRepo.baseDelete(noticeBoard, {id: req.params.id });
      if (!noticeBoards) return next({ message: "No Public Notice found", status: 400 });
  
      res.data = { message: "Notice Board removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }