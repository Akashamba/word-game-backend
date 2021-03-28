const mongoose = require("mongoose");

const wordSchema = new mongoode.Schema({
    word: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    type: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    meaning: {
        type: String,
        required: true,
        min: 1
    },
    example: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Word', wordSchema);