
const {practiceNote} = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');
//const {RECENTLY_APPROVED_TYPES} = require('app/Constants/constant');

module.exports = {
    addpracticeNote,
    listpracticeNote,
    updatepracticeNote,
    removepracticeNote
}

//create
async function addpracticeNote(req, res, next) {
    const {type, name,documentName, documentUrl } = req.body;
    if (!type) {
        return next({ message: "Missing Practice Note type", status: 400 });
      }    
    if (!name) {
      return next({ message: "Missing Practice Note name", status: 400 });
    }
    if (!documentName) {
        return next({ message: "Missing documentName", status: 400 });
      }
    if (!documentUrl) {
      return next({ message: "Missing url", status: 400 });
    }
    try {
      const  practicNotes = await BaseRepo.baseCreate(practiceNote, { type, name, documentName, documentUrl });
      res.data = practicNotes;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }

  //update
  async function updatepracticeNote(req, res, next) {
    const { id } = req.params;
  console.log(id)
    if (!id) {
      return next({ message: "Missing Practice Note ID", status: 400 });
    }
  
    const updateData = {};
    if (req.body.type) {
      updateData.type = req.body.type;
    }
    if (req.body.name) {
      updateData.name = req.body.name;
    }
    if (req.body.documentName) {
      updateData.documentName = req.body.documentName;
    }
    if (req.body.documentUrl) {
      updateData.documentUrl = req.body.documentUrl;
    }
  
    try {
      await BaseRepo.baseUpdate(practiceNote, { id }, updateData);
      return next();
    } catch (err) {
      return next(err);
    }
  }
  

  async function listpracticeNote(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip,
      order:[["id","DESC"]],
  }
    try {
        const practicNotes = await BaseRepo.baseList(practiceNote, params);
        res.data = practicNotes;
        return next();
    } catch (err) {
        return next(err);
    }
}

//delete
async function removepracticeNote(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const practicNotes = await BaseRepo.baseDelete(practiceNote, {id: req.params.id });
      if (!practicNotes) return next({ message: "No Practice Note found", status: 400 });
  
      res.data = { message: "Practice Note removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }