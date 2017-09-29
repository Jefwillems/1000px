const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const passport = require('passport');
const databaseConfig = require('./config/database'); // get our config file

const cors = require('cors');

const port = process.env.PORT || 3000; // used to create, sign, and verify tokens

mongoose.connect(databaseConfig.database, {
    useMongoClient: true
}); // connect to database
app.set('superSecret', databaseConfig.secret); // secret variable

//cors configuration
const corsOptions = {
    origin: '*',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(passport.initialize());

app.use(morgan('dev'));

const apiRoutes = require('./app/routes/api');
app.use('/api', apiRoutes);

app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port);
});