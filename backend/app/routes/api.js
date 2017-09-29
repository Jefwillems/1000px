const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the coolest API on earth!'
    });
});

const userRoutes = require('./users');
api.use('/users', userRoutes);

const authenticationRoutes = require('./authenticate');
api.use('/auth', authenticationRoutes);

module.exports = api;