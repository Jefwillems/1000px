const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const port = process.env.PORT || 3000;

//cors configuration //CROSS-DOMAIN errors
const corsOptions = {
    origin: '*', 
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions));

require('./app/models/user');



// Use morgan for logging
app.use(morgan('dev'));

//add routes from the api
const apiRoutes = require('./app/routes/api');
app.use('/api', apiRoutes);

//TODO: switch to serve the frontend
app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

app.use('/file', express.static('app/public'));

//listen on the specified port

app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port);
});