'use strict'
const { taxcalender } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');
module.exports = {
  CreateTaxTable, getTaxDetail, updateTaxDetail, deleteTaxDetail
}

async function CreateTaxTable(req, res, next) {
  try {
    const createTaxCalender = await BaseRepo.baseCreate(taxcalender, req.body);
    res.data = createTaxCalender;
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function getTaxDetail(req, res, next) {
  try {
    const getTaxCalender = await BaseRepo.baseList(taxcalender, req.body);
    res.data = getTaxCalender;
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function updateTaxDetail(req, res, next) {
  const { id } = req.params;
  const body = req.body;
  if (!id) {
    return next({ message: "Missing  ID", status: 400 });
  }

  try {
    const updateTaxCalender = await BaseRepo.baseUpdate(taxcalender, { searchParams: { id } }, body);
    res.data = { message: "sucessfully updated" };
    return next()
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

async function deleteTaxDetail(req, res, next) {
  const { id } = req.params;
  const body = req.body;
  if (!id) {
    return next({ message: "Missing ID", status: 400 })
  }
  try {
    const deleteTaxCalender = await BaseRepo.baseDelete(taxcalender, { id }, body);
    res.data = { message: "sucessfully deleted" };
    return next()
  } catch (err) {
    console.log(err);
    return next(err);
  }
}