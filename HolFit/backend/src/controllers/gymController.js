// controllers/gymController.js

const Gym = require('../models/Gym'); // Importer le modèle Gym

// Récupérer tous les gymnases
exports.getAllGyms = async (req, res) => {
    try {
        const gyms = await Gym.find();
        res.json(gyms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer un gymnase par ID
exports.getGymById = async (req, res) => {
    try {
        const gym = await Gym.findById(req.params.gymId);
        if (!gym) return res.status(404).json({ message: 'Gymnase non trouvé' });
        res.json(gym);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Créer un nouvel gymnase
exports.createGym = async (req, res) => {
    try {
        const gym = new Gym(req.body);
        await gym.save();
        res.status(201).json(gym);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
