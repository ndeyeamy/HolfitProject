// controllers/index.js

const UserController = require('./userController');
const GymController = require('./gymController');
const CoachController = require('./coachController');
const ReservationController = require('./reservationController');

module.exports = {
    UserController,
    GymController,
    CoachController,
    ReservationController,
};
