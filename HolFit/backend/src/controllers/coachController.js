// controllers/coachController.js

const Coach = require('../models/Coach'); // Importer le modèle Coach

// Récupérer tous les coachs
exports.getAllCoaches = async (req, res) => {
    try {
        const coaches = await Coach.find();
        res.json(coaches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer un coach par ID
exports.getCoachById = async (req, res) => {
    try {
        const coach = await Coach.findById(req.params.coachId);
        if (!coach) return res.status(404).json({ message: 'Coach non trouvé' });
        res.json(coach);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
