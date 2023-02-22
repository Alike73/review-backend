const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    question1: {
        type: String,
        required: true
    },
    question2: {
        type: String,
        required: true
    },
    question3: {
        type: String,
        required: true
    },
    question4: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    starsRate: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Review', reviewSchema)