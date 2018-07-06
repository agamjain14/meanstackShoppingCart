// 1) Express for nodejs
const express = require('express');
const app = express();
const path = require('path');

// 4) authentication
const router = express.Router();
const authentication = require('./routes/authentication')(router);

// 5) body parser

const bodyParser = require('body-parser');

// 2) Mongodb connection
var mongoose = require('mongoose');
const config = require('./config/database');
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('error ' + err);
    } else {
        console.log('Conected to database: ' + config.db);
    }
});

// 5) put bodyparser code before the routes (converts request to req.body)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3) connect node.js to angular 2
app.use(express.static(__dirname + '/client/dist/client/'));

// 4) 
app.use('/authentication', authentication);
// 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});



app.listen(3000, () => {
    console.log('listening on port 3000');
});