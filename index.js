// 1) Express for nodejs
const express = require('express');
const app = express();
const path = require('path');

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

// 3) connect node.js to angular 2


app.use(express.static(__dirname + '/client/dist/client/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});