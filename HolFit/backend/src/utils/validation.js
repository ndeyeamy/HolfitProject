// utils/validation.js

const { body, validationResult } = require('express-validator');

// Middleware pour valider les entrées utilisateur
exports.validateUser = [
    body('username').isString().notEmpty().withMessage('Le nom d’utilisateur est requis'),
    body('email').isEmail().withMessage('L\'email doit être valide'),
    body('password').isLength({ min: 6 }).withMessage('Le mot de passe doit contenir au moins 6 caractères'),
];

// Middleware pour vérifier les erreurs de validation
exports.checkValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
