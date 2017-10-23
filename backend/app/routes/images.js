const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/fresh', (req, res) => {
    //TODO GET FILEPATHS FROM DATABASE INSTEAD OF READING DIRECTORY
    fs.readdir(process.env.PWD + '/public/img/', (err, files) => {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json(files);
    });
});

router.get('/popular', (req, res) => {

});

router.get('/picks', (req, res) => {

});

module.exports = router;