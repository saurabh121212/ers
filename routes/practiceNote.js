const router = require('express').Router();
const practiceNoteController = require('../app/Controllers/practiceNoteController');

// This is use for Recent Approved Web services. use for Approved Practice Notes.
router.post('/', practiceNoteController.addpracticeNote);
router.get('/', practiceNoteController.listpracticeNote);
router.put('/:id',practiceNoteController.updatepracticeNote)
router.delete('/:id',practiceNoteController.removepracticeNote);

module.exports = router;