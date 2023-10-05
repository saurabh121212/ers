const router = require('express').Router();
const settingcontroller = require('../app/Controllers/SettingController');
const auth = require("../middleware/authorize")

// This is use for creating a web service for system setting like address, social meedina links etc.
router.post('/',auth(1), settingcontroller.CreateSettingTable);
router.get('/:id', auth(1),settingcontroller.GetSettingDetail);
router.put('/:id',auth(1),settingcontroller.UpdateSetting);


module.exports = router;
