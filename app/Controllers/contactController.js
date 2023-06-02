'use strict'
const { contact } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');
module.exports = {
  CreateContactTable, getListcontact, updatecontact, deletecontact
}

async function CreateContactTable(req, res, next) {
  try {
    const Createcontact = await BaseRepo.baseCreate(contact, req.body);
    res.data = Createcontact;
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function getListcontact(req, res, next) {
  try {
    const getcontact = await BaseRepo.baseList(contact, req.body);
    res.data = getcontact;
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function updatecontact(req, res, next) {
  const { id } = req.params;
  const body = req.body;
  if (!id) {
    return next({ message: "Missing  ID", status: 400 });
  }

  try {
    const updatecontact = await BaseRepo.baseUpdate(contact, { searchParams: { id } }, body);
    res.data = { message: "sucessfully updated" };
    return next()
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function deletecontact(req, res, next) {
  const { id } = req.params;
  const body = req.body;
  if (!id) {
    return next({ message: "Missing ID", status: 400 })
  }
  try {
    const deletecontact = await BaseRepo.baseDelete(contact, { id }, body);
    res.data = { message: "sucessfully deleted" };
    return next()
  } catch (err) {
    console.log(err);
    return next(err);
  }
}