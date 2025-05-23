const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    auth0Id: {
        type: String,
        required: true
      },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Usuario', UsuarioSchema);