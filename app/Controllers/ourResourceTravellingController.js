const { ourResourceTravelling } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');

module.exports = {
    add,
    list,
    remove,
    update
  }

//create
async function add(req, res, next) {
    try {
      const AddFAQ = await BaseRepo.baseCreate(ourResourceTravelling, req.body);
      res.data = AddFAQ;
      return next();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }


  // List
  async function list(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip
    }
    try {
      const List = await BaseRepo.baseList(ourResourceTravelling, params);
      res.data = List;
      return next();
    } catch (err) {
      return next(err);
    }
  }


  //delete
async function remove(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const faqDelete = await BaseRepo.baseDelete(ourResourceTravelling, { id: req.params.id });
      if (!faqDelete) return next({ message: "No id found", status: 400 });
  
      res.data = { message: " removed successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }
  


  //update
async function update(req, res, next) {
    const { id } = req.params;
    console.log(id)
    if (!id) {
      return next({ message: "Missing ID", status: 400 });
    }
    try {
      await BaseRepo.baseUpdate(ourResourceTravelling, { id }, req.body);
      res.data = { message: "successfully updated" }
      return next();
    } catch (err) {
      return next(err);
    }
  }
