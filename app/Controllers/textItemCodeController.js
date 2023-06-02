const { textitemcode } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');


module.exports = {
    addTextItemCode,
    listTextItemCode,
    removeTextItemCode
  }

//create
async function addTextItemCode(req, res, next) {
    const { text_type, text_type_two, item_name, item_code,del_status} = req.body;
    try {
      const textItemCode = await BaseRepo.baseCreate(textitemcode,{ text_type, text_type_two, item_name, item_code,del_status });
      res.data = textItemCode;
      return next();
         //return feedback.toJSON();
    } catch (err) {
      console.log("Err: ", err);
      return next(err);
    }
  }


  async function listTextItemCode(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip
    }
    try {
      const textItemCode = await BaseRepo.baseList(textitemcode, params);
      res.data = textItemCode;
      return next();
    } catch (err) {
      return next(err);
    }
  }


  //delete
async function removeTextItemCode(req, res, next) {
    if (!req.params.id)
      return next({ message: "Invalid or missing Id", status: 400 });
    try {
      //check if project exist
      const textItemCode = await BaseRepo.baseDelete(textitemcode, { id: req.params.id });
      if (!textItemCode) return next({ message: "No item found", status: 400 });
  
      res.data = { message: "Item Code Removed Successfully", status: 200 };
      return next();
    } catch (err) {
      return next(err);
    }
  }