
const {tenders} = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');


module.exports = {
    addTender,
    listTender,
    updateTender,
    removeTender
}

//create
async function addTender(req, res, next) {
    const {tenderName,deadline,publishedDate, reference, documentUrl, documentName } = req.body;
    if (!tenderName) {
        return next({ message: "Missing Tender Name", status: 400 });
      }
    try {
      const  tendersValues = await BaseRepo.baseCreate(tenders, {tenderName, deadline, publishedDate, reference, documentUrl,documentName});
      res.data = tendersValues;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
}

  //update
  async function updateTender(req, res, next) {
    const { id } = req.params;
  console.log(id)
    if (!id) {
      return next({ message: "Missing Tender ID", status: 400 });
    }
  
    const updateData = {};
    if (req.body.tenderName) {
      updateData.tenderName = req.body.tenderName;
    }
    if (req.body.deadline) {
      updateData.deadline = req.body.deadline;
    }
    if (req.body.publishedDate) {
      updateData.publishedDate = req.body.publishedDate;
    }
    if (req.body.documentUrl) {
      updateData.documentUrl = req.body.documentUrl;
    }
    if (req.body.reference) {
      updateData.reference = req.body.reference;
    }
  
    try {
      await BaseRepo.baseUpdate(tenders, { id }, updateData);
      return next();
    } catch (err) {
      return next(err);
    }
  }
  

  async function listTender(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip,
      order:[["id","DESC"]],
  }
    try {
        const tendersValues = await BaseRepo.baseList(tenders, params);
        res.data = tendersValues;
        return next();
    } catch (err) {
        return next(err);
    }
}

//delete
async function removeTender(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const tendersValues = await BaseRepo.baseDelete(tenders, {id: req.params.id });
      if (!tendersValues) return next({ message: "No Notice Board found", status: 400 });
  
      res.data = { message: "Tender removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }