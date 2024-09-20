// models/Coach.js

const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialty: {
        type: String, // Spécialité du coach (ex. : fitness, yoga, etc.)
        required: true,
    },
    availability: {
        type: [String], // Jours et heures disponibles
        required: true,
    },
    pricePerSession: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Coach', coachSchema);
