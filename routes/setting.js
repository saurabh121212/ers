const router = require('express').Router();
const settingcontroller = require('../app/Controllers/SettingController');

// This is use for creating a web service for system setting like address, social meedina links etc.
router.post('/', settingcontroller.CreateSettingTable);
router.get('/:id', settingcontroller.GetSettingDetail);
router.put('/:id',settingcontroller.UpdateSetting);


module.exports = router;
