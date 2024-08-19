const studyPlannerModel = require('../models/studyPlannerModel');

const addSubject = async (req, res) => {
    try {
        const data = req.body;
        const subject = new studyPlannerModel(data);
        await subject.save();
        res.status(200).json({ "data": subject, "message": "Subject added successfully", "err": "" });
    } catch (err) {
        res.status(500).json({ "data": "", "message": "Unable to add subject", "err": err.message });
    }
};

const getSubjects = async (req, res) => {
    try {
        const subjects = await studyPlannerModel.find();
        res.status(200).json({ "data": subjects, "message": "Subjects retrieved successfully", "err": "" });
    } catch (err) {
        res.status(500).json({ "data": "", "message": "Unable to retrieve subjects", "err": err.message });
    }
};

const updateStudyTime = async (req, res) => {
    try {
        const { id, studyTime } = req.body;
        const updatedSubject = await studyPlannerModel.findByIdAndUpdate(id, { $inc: { studyTime } }, { new: true });
        res.status(200).json({ "data": updatedSubject, "message": "Study time updated successfully", "err": "" });
    } catch (err) {
        res.status(500).json({ "data": "", "message": "Unable to update study time", "err": err.message });
    }
};

// const markAsCompleted = async (req, res) => {
//     try {
//         const { id } = req.body;
//         const updatedSubject = await studyPlannerModel.findByIdAndUpdate(id, { completed: true, dateCompleted: Date.now() }, { new: true });
//         res.status(200).json({ "data": updatedSubject, "message": "Subject marked as completed", "err": "" });
//     } catch (err) {
//         res.status(500).json({ "data": "", "message": "Unable to mark subject as completed", "err": err.message });
//     }
// };


const markAsCompleted = async (req, res) => {
    try {
        const { id, studyTime } = req.body;
        const updatedSubject = await studyPlannerModel.findByIdAndUpdate(
            id,
            { completed: true, dateCompleted: Date.now(), studyTime },
            { new: true }
        );
        res.status(200).json({ "data": updatedSubject, "message": "Subject marked as completed", "err": "" });
    } catch (err) {
        res.status(500).json({ "data": "", "message": "Unable to mark subject as completed", "err": err.message });
    }
};


const deleteSubject = async (req, res) => {
    try {
        const { id } = req.params;
        await studyPlannerModel.findByIdAndDelete(id);
        res.status(200).json({ "data": "", "message": "Subject deleted successfully", "err": "" });
    } catch (err) {
        res.status(500).json({ "data": "", "message": "Unable to delete subject", "err": err.message });
    }
};

const getCompletedSubjects = async (req, res) => {
    try {
        const completedSubjects = await studyPlannerModel.find({ completed: true });
        res.status(200).json({ "data": completedSubjects, "message": "Completed subjects retrieved successfully", "err": "" });
    } catch (err) {
        res.status(500).json({ "data": "", "message": "Unable to retrieve completed subjects", "err": err.message });
    }
};

module.exports = {
    addSubject,
    getSubjects,
    updateStudyTime,
    markAsCompleted,
    deleteSubject,
    getCompletedSubjects //newly added routes ot be added....
};
