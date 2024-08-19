const express = require('express');
const router = express.Router();

const studyPlannerControllers = require('../controllers/studyPlannerControllers');

router.post('/addSubject', studyPlannerControllers.addSubject);
router.get('/getSubjects', studyPlannerControllers.getSubjects);
router.put('/updateStudyTime', studyPlannerControllers.updateStudyTime);
router.put('/markAsCompleted', studyPlannerControllers.markAsCompleted);
router.delete('/deleteSubject/:id', studyPlannerControllers.deleteSubject);
router.get('/getCompletedSubjects', studyPlannerControllers.getCompletedSubjects);

module.exports = router;
