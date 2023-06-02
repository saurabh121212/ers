const router = require('express').Router();
const settingcontroller = require('../app/Controllers/SettingController');

router.post('/', settingcontroller.CreateSettingTable);
router.get('/:id', settingcontroller.GetSettingDetail);
router.put('/',settingcontroller.UpdateSetting);


module.exports = router;
