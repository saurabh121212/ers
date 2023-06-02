

const {noticeBoard} = require('models')
const BaseRepo = require('app/Repositories/baseRepository');
const {NOTICE_BOARD_TYPES} = require('app/Constants/constant');

module.exports = {
    addNoticeBoard,
    listNoticeBoard,
    removeNoticeBoard,
    updateNoticeBoard
}

//create
async function addNoticeBoard(req, res, next) {
    const {type, name,description,documentName, documentUrl } = req.body;
    if (!type) {
        return next({ message: "Missing Notice Board type", status: 400 });
      }
    if (!NOTICE_BOARD_TYPES.includes(type)) {
        return res.status(400).json({message: 'Invalid type'});
    }
    
    if (!name) {
      return next({ message: "Missing Notice Board name", status: 400 });
    }
    if (!documentName) {
        return next({ message: "Missing documentName", status: 400 });
      }
    if (!documentUrl) {
      return next({ message: "Missing url", status: 400 });
    }
    try {
      const  noticeBoards= await BaseRepo.baseCreate(noticeBoard, {type, name, description, documentName, documentUrl });
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
      return next({ message: "Missing Notice Board ID", status: 400 });
    }
  
    const updateData = {};
    if (req.body.name) {
      updateData.name = req.body.name;
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
      offset: req.skip
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
      if (!noticeBoards) return next({ message: "No Notice Board found", status: 400 });
  
      res.data = { message: "Notice Board removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }