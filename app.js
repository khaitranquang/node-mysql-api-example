const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// This will be our application entry. We will setup our server here
const http = require('http');
// Setup the express app
const app = express();
// Log request to the console
app.use(logger('dev'));
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Setup a default catch all route that sends back a welcome message in JSON format
app.get('*', (req, res) => {
    res.status(200).send({
        message: 'Welcome to Nodejs API example'
    })
});

const port = parseInt(process.env.PORT, 10) || 8084;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;