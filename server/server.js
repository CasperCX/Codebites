const express = require("express");
const bodyParser = require('body-parser');

//Database connection
const db = require('./db-connection'); 

//Route controllers
const controller = require("./controller");

//Server setup
const server = express();
    server.use(bodyParser.json({ limit: '100mb' }));
    server.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));

//API Routing
const routes = express.Router();
    server.use('/', routes);

    //Get all topics
    routes.get('/topics', controller.getTopics);

    //Get domains of topic
    routes.get('/topic/:term', controller.getTopic);

    //TODO Get all tutorials of domain

    //Get single tutorial of domain
    routes.get('/:domain/:tutid', controller.getTutorial);





server.listen(5000, () => {
    console.log("server running on port 5000");
});