const router = require('express').Router();
const practiceNoteController = require('../app/Controllers/practiceNoteController');
const auth = require("../middleware/authorize")

// This is use for Recent Approved Web services. use for Approved Practice Notes.
router.post('/',auth(1), practiceNoteController.addpracticeNote);
router.get('/',auth(1), practiceNoteController.listpracticeNote);
router.put('/:id',auth(1),practiceNoteController.updatepracticeNote)
router.delete('/:id',auth(1),practiceNoteController.removepracticeNote);

module.exports = router;