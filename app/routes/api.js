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

const imgRoutes = require('./images');
api.use('/img', imgRoutes);

const blogRoutes = require('./blog');
api.use('/blog', blogRoutes);

module.exports = api;