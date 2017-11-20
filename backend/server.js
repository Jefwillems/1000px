const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let mongoose = require('mongoose');
let passport = require('passport');

const port = process.env.PORT || 3000;

//cors configuration //CROSS-DOMAIN errors
const corsOptions = {
    origin: '*',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PX1000_DB, {
    useMongoClient: true
});

require('./app/models/user');

require('./config/passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
// Use morgan for logging
app.use(morgan('dev'));
app.use(passport.initialize());
//add routes from the api
const apiRoutes = require('./app/routes/api');
app.use('/api', apiRoutes);

//TODO: switch to serve the frontend
app.get('/', function (req, res) {
    res.json(app._router.stack
        .filter(r => r.route)
        .map(r => r.route.path));
});

app.use('/file', express.static('app/public'));

//listen on the specified port

app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port);
});