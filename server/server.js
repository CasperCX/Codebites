const express = require("express");
const bodyParser = require('body-parser');

//Database
const db = require('./sequelize-connection'); 
const Item = require('./models/Item');
const Topic = require('./models/Topic');

//Server setup
const server = express();
    server.use(bodyParser.json({ limit: '100mb' }));
    server.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));

// return Item.create({
//     name:'Laptop',
//     description: 'Acer 2340TL',
//     qty: 23
// }).then(function (item) {
//     if (item) {
//        console.log("created entry")
//     } else {
//         console.log("failed inserting record")
//         // response.status(400).send('Error in insert new record');
//     }
// });



server.get('/languages' , (req, res) => {
    return Topic.findAll().then((items) => {
        if (items) {
            res.status(200).send(items);
        } else {
            res.status(400).send(`Error finding topic: ${item}`);
        }
    });
    


    // res.json( [
    //             {"title":"Javascript", "tutorialcount":143},
    //             {"title":"C#", "tutorialcount":412},
    //             {"title":"Kotlin", "tutorialcount":543},
    //             {"title":"Elixir", "tutorialcount":145},
    //             {"title":"Java", "tutorialcount":212},
    //             {"title":"Python", "tutorialcount":2644},
    //             {"title":"HTML", "tutorialcount":4132},
    //             {"title":"CSS", "tutorialcount":5435},
    //             {"title":"PHP", "tutorialcount":654},
    //             {"title":"Go", "tutorialcount":483},
    //             {"title":"Perl", "tutorialcount":122},
    //             {"title":"Swift", "tutorialcount":432},
    //             {"title":"C", "tutorialcount":765},
    //             {"title":"C++", "tutorialcount":1201},
    //             {"title":"Ruby", "tutorialcount":1212},
    //             {"title":"Scala", "tutorialcount":2212},
    //             {"title":"Lua", "tutorialcount":222},
    //             {"title":"Haskell", "tutorialcount":23},
    //             {"title":"Dart", "tutorialcount":25}
    //         ]
    //     )
    });

//Test for getting topic detail  data
server.get('/javascript', (req, res) => {
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
server.get('/javascript/authentication', (req, res) => {
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