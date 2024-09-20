// controllers/reservationController.js

const Reservation = require('../models/Reservation'); // Importer le modèle Reservation

// Créer une nouvelle réservation
exports.createReservation = async (req, res) => {
    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Récupérer toutes les réservations d'un utilisateur
exports.getUserReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find({ userId: req.params.userId });
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
