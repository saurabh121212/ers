'use strict'
const { setting } = require('models')
const BaseRepo = require('app/Repositories/BaseRepository');
const fields = require('lodash');

module.exports = {
  CreateSettingTable,
  GetSettingDetail,
  UpdateSetting

}
async function CreateSettingTable(req, res, next) {
  try {
    const CreateSetting = await BaseRepo.baseCreate(setting, req.body);
    res.data = CreateSetting;
    return next()
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

  async function GetSettingDetail(req, res, next) {
    const params = {
      searchParams: {},
      limit: req.limit,
      offset: req.skip
  }
    try {
      const GetSetting = await BaseRepo.baseList(setting,params);
      res.data = GetSetting;
      return next();
    } catch (err) {
      console.log(err);
      return next(err);
    }
  }



async function UpdateSetting(req, res, next) {
  try {
    const { id } = req.params;
    let updateFields = req.body;

    // if (type === 'SOCIAL_MEDIA') {
    //   updateFields = fields.pick(req.body, ['facebook', 'instagram', 'linkedIn', 'youtube', 'twitter']);
    // }
    // else if (type === 'CONTACT_DETAIL') {
    //   updateFields = fields.pick(req.body, ['contactAddress', 'contactEmail', 'contact1', 'contact2']);
    // }
    // else if (type === 'OPENING_HOURS') {
    //   updateFields = fields.pick(req.body, ['openingHourMonToFri', 'openingHourSatToSun']);
    // } else {
    //   throw new Error('Invalid type given');
    // }

    const updatedSetting = await BaseRepo.baseUpdate(setting, { searchParams: { id } }, updateFields);
    res.data = updatedSetting;
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

