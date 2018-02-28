//LIBRARIES
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var server = express()
var port = 3000

require('./db/mlab-config')

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.use("*", (error, req, res, next) => {
    res.status(400).send(error);
});


server.listen(port, () => {
    console.log("the server is running... Port:", port);
});