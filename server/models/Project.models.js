const mongoose = require("mongoose");


const ProjectSchema = new mongoose.Schema({
    project: {
        type: String,
        required: [true, "You must provide Project"],
        minlength: [3, "project must be at least 3 character"]
    },
    date: {
        type: Date,
        required: [true, "You must select a date"]
    },
    Status: {
        type: String
    }
})

module.exports = mongoose.model("Project", ProjectSchema);