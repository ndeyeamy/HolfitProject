// models/Gym.js

const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    equipment: {
        type: [String], // Liste des équipements disponibles
        required: true,
    },
    hours: {
        type: String, // Horaires d'ouverture
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    promotions: {
        type: String, // Informations sur les promotions
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Gym', gymSchema);
