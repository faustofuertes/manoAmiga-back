const mongoose = require('mongoose');

const PublicacionSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    pricing: {
        type: Number,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    },
    // 🔽 Promotion fields
    isPromoted: {
        type: Boolean,
        default: false
    },
    promotedUntil: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('Publicacion', PublicacionSchema);
