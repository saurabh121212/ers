const { faq } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
    addFAQ,
    listFAQ,
    removeFAQ,
    updateFAQ
  }

//create
async function addFAQ(req, res, next) {
    try {
      const AddFAQ = await BaseRepo.baseCreate(faq, req.body);
      res.data = AddFAQ;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }


  // List
  async function listFAQ(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip
    }
    try {
      const ListFAQ = await BaseRepo.baseList(faq, params);
      res.data = ListFAQ;
      return next();
    } catch (err) {
      return next(err);
    }
  }


  //delete
async function removeFAQ(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const faqDelete = await BaseRepo.baseDelete(faq, { id: req.params.id });
      if (!faqDelete) return next({ message: "No id found", status: 400 });
  
      res.data = { message: " removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }
  


  //update
async function updateFAQ(req, res, next) {
    const { id } = req.params;
    console.log(id)
    if (!id) {
      return next({ message: "Missing ID", status: 400 });
    }
    try {
      await BaseRepo.baseUpdate(faq, { id }, req.body);
      res.data = { message: "successfully updated" }
      return next();
    } catch (err) {
      return next(err);
    }
  }
