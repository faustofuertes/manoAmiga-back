const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    authorId: {
        type: String,
        required: true
    },
    targetId: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    textReview: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 280
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Review', ReviewSchema);