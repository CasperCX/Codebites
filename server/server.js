const express = require("express");
const bodyParser = require('body-parser');

//Database
const db = require('./sequelize-connection'); 
const Topic = require('./models/Topic');
// const Domain = require('./models/Domain');
// const Tutorial = require('./models/Tutorial');


//Server setup
const server = express();
    server.use(bodyParser.json({ limit: '100mb' }));
    server.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));



server.get('/topics' , (req, res) => {
    return Topic.findAll().then((items) => {
        if (items) {
            res.status(200).send(items);
        } else {
            res.status(400).send(`Error finding topic: ${items}`);
            }
        });
    });

//Test for getting topic detail  data
server.get('/topic/:term', (req, res) => {
    //TODO get and return all domains from a topic
    console.log("req:", req.params.term)
    const term = req.params.term;
    res.json({
            "topic":"Javascript",
            "domain": [
                {"type":"Authentication", "tutorialcount":143},
                {"type":"Frontend framework", "tutorialcount":412},
                {"type":"Backend framework", "tutorialcount":543},
                {"type":"React", "tutorialcount":145},
                {"type":"Angular", "tutorialcount":2644},
                {"type":"Vue", "tutorialcount":1201},
                {"type":"Node", "tutorialcount":2212},
                {"type":"MongoDB", "tutorialcount":122}
            ]
        })
});

//Test for getting domain detail  data
server.get('/:domain/:tutid', (req, res) => {
    //TODO get return all tutorials from a domain
    console.log(`req:domain: ${req.params.domain} - tutid: ${req.params.tutid}`);
    const domain = req.params.domain;
    const tutid = req.params.tutid;
    res.json({
            "topic":"Javascript",
            "tutorials": [
                {"tutid": 1, "title":"Javascript The easy way", "type":"Authentication"},
                {"tutid": 2, "title":"Javascript is ez", "type":"Web framework"},
                {"tutid": 3, "title":"Javascript for noobs", "type":"Frontend framework"},
                {"tutid": 4, "title":"What's new in ES2018", "type":"Authentication"},
                {"tutid": 5, "title":"Javascript The easy way", "type":"Authentication"},
                {"tutid": 6, "title":"Javascript is ez", "type":"Web framework"},
                {"tutid": 7, "title":"Javascript for noobs", "type":"Frontend framework"},
                {"tutid": 8, "title":"What's new in ES2018", "type":"Authentication"},
                {"tutid": 9, "title":"Javascript The easy way", "type":"Authentication"},
                {"tutid": 10, "title":"Javascript is ez", "type":"Web framework"},
                {"tutid": 11, "title":"Javascript for noobs", "type":"Frontend framework"},
                {"tutid": 12, "title":"What's new in ES2018", "type":"Authentication"},
                {"tutid": 13, "title":"Javascript for noobs", "type":"Frontend framework"},
                {"tutid": 14, "title":"What's new in ES2018", "type":"Authentication"},
                {"tutid": 15, "title":"Javascript The easy way", "type":"Authentication"},
                {"tutid": 16, "title":"Javascript is ez", "type":"Web framework"},
                {"tutid": 17, "title":"Javascript for noobs", "type":"Frontend framework"},
                {"tutid": 18, "title":"What's new in ES2018", "type":"Authentication"}
            ]
        })
});



server.listen(5000, () => {
    console.log("server running on port 5000");
});