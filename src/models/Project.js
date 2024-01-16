import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    prjId: {
        type: String,
        required: true,
        unique: true
    },
    prjName: {
        type: String,
        required: true
    },
    prjDesc: {
        type: String,
        required: true
    },
    prjCell: {
        type: String,
        required: true
    },
    prjComponet: {
        type: String,
        required: true
    },
    prjCode: {
        type: String,
        required: true
    },
    prjLang: {
        type: String,
        required: true
    }
});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;