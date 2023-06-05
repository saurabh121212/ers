

const {recetlyApproved} = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');
const {RECENTLY_APPROVED_TYPES} = require('app/Constants/constant');

module.exports = {
    addRecetlyApproved,
    listRecetlyApproved,
    removeRecetlyApproved,
    updateRecetlyApproved
}

//create
async function addRecetlyApproved(req, res, next) {
    const {type, name,description,documentName, documentUrl } = req.body;
    if (!type) {
        return next({ message: "Missing Recetly Approved type", status: 400 });
      }
    if (!RECENTLY_APPROVED_TYPES.includes(type)) {
        return res.status(400).json({message: 'Invalid type'});
    }
    
    if (!name) {
      return next({ message: "Missing Recetly Approved name", status: 400 });
    }
    if (!documentName) {
        return next({ message: "Missing documentName", status: 400 });
      }
    if (!documentUrl) {
      return next({ message: "Missing url", status: 400 });
    }
    try {
      const  recetlyApproveds= await BaseRepo.baseCreate(recetlyApproved, {type, name, description, documentName, documentUrl });
      res.data = recetlyApproveds;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }

  //update
  async function updateRecetlyApproved(req, res, next) {
    const { id } = req.params;
  console.log(id)
    if (!id) {
      return next({ message: "Missing Recetly Approved ID", status: 400 });
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
      await BaseRepo.baseUpdate(recetlyApproved, { id }, updateData);
      return next();
    } catch (err) {
      return next(err);
    }
  }
  

  async function listRecetlyApproved(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip
  }
    try {
        const recetlyApproveds = await BaseRepo.baseList(recetlyApproved, params);
        res.data = recetlyApproveds;
        return next();
    } catch (err) {
        return next(err);
    }
}

//delete
async function removeRecetlyApproved(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const recetlyApproveds = await BaseRepo.baseDelete(recetlyApproved, {id: req.params.id });
      if (!recetlyApproveds) return next({ message: "No Recetly Approved found", status: 400 });
  
      res.data = { message: "Recetly Approved removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }