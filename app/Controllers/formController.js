'use strict'
const { form } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');


module.exports = {
  CreateFormTable, GetFormDetail, UpdateFormDetail, DeleteFormDetail

}
async function CreateFormTable(req, res, next) {
  try {
    const CreateForm = await BaseRepo.baseCreate(form, req.body);
    res.data = CreateForm;
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function GetFormDetail(req, res, next) {
  const { category } = req.query
  try {
    let params = {}
    if (category) {
     params = {
        searchParams: {category},
        limit: req.limit,
        offset: req.skip,
        order:[["id","DESC"]]
      }    
    }
    const GetForm = await BaseRepo.baseList(form, params);
    res.data = GetForm;
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}


async function UpdateFormDetail(req, res, next) {
  const { id } = req.params;
  const body = req.body;
  if (!id) {
    return next({ message: "Missing  ID", status: 400 });
  }
  try {
    const UpdateForm = await BaseRepo.baseUpdate(form, { id }, body);
    res.data = { message: "successfully updated" };
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}



async function DeleteFormDetail(req, res, next) {
  const { id } = req.params;
  const body = req.body;
  if (!id) {
    return next({ message: "Missing  ID", status: 400 });
  }
  try {
    const DeleteForm = await BaseRepo.baseDelete(form, { id }, body);
    res.data = { message: "successfully deleted" };
    return next()
  }
  catch (err) {
    console.log(err);
    return next(err);
  }
}