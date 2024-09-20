// routes/index.js

const express = require('express');
const router = express.Router();
const { UserController, GymController, CoachController, ReservationController } = require('../controllers');

// Routes pour les utilisateurs
router.post('/users', UserController.createUser);
router.get('/users/:userId', UserController.getUserById);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

// Routes pour les gymnases
router.get('/gyms', GymController.getAllGyms);
router.get('/gyms/:gymId', GymController.getGymById);
router.post('/gyms', GymController.createGym);

// Routes pour les coachs
router.get('/coaches', CoachController.getAllCoaches);
router.get('/coaches/:coachId', CoachController.getCoachById);

// Routes pour les réservations
router.post('/reservations', ReservationController.createReservation);
router.get('/reservations/user/:userId', ReservationController.getUserReservations);

module.exports = router;

