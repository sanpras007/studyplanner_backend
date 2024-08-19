const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studyPlannerSchema = new Schema({
    "subject": { type: String, required: true },  // Subject name
    "description": { type: String },  // Optional description of the subject
    "studyTime": { type: Number, default: 0 },  // Time spent on the subject in minutes
    "completed": { type: Boolean, default: false },  // Completion status
    "dateAdded": { type: Date, default: Date.now },  // Date the subject was added
    "dateCompleted": { type: Date }  // Date the subject was completed
});

const studyPlannerModel = mongoose.model("studyplanners", studyPlannerSchema);

module.exports = studyPlannerModel;
