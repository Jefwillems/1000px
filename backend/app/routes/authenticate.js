const express = require('express');
const authRoutes = express.Router();
const User = require('../models/user'); // get our mongoose model


authRoutes.post('/login', (req, res) => {
    User.findOne({
        name: req.body.name
    }, (error, user) => {
        if (error) throw error;

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else if (user) {
            
        }
    });
});

module.exports = authRoutes;