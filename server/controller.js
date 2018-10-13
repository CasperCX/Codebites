const Topic = require('./models/Topic');
const Domain = require('./models/Domain');
// const Tutorial = require('./models/Tutorial');

module.exports = controller = {
    //Get all topics
        getTopics: function(req, res)  {
            return Topic.findAll().then((result) => {
                if (!result) {
                    res.status(400).send(`Error finding topic: ${result}`);
                } else {
                    res.status(200).send(result);
                    }
                });
            },

    //Get domains of a topic
        getTopic: function(req, res) {
            const term = req.params.term;
            const topicId = req.query.topicId;
     
            return Domain.findAll({
                where: {
                    topicId: topicId
                }}).then((result) => {
                    if (!result) {
                        res.status(400).send(`Error finding topic: ${result}`);
                    } else {
                        res.status(200).send({topic: term, domain: result});
                    }
                });
            },

        //Get single tutorial by tutorial id
        getTutorial: function(req, res) {
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
            }
        };
    
        


