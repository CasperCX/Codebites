const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Topic = require('./models/Topic');
const Domain = require('./models/Domain');
const Tutorial = require('./models/Tutorial');

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

    //Get all domains of topic
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

        //Get tutorials for domain
        getTutorials: function(req, res) {
            const domainId = req.params.domainId;
            const domain = req.params.domain;

            return Tutorial.findAll({
                where: {
                    [Op.and]: [{domainId: domainId}, {domain: domain}]
                }}).then((result) => {
                    if (!result) {
                        res.status(400).send(`Error finding topic: ${result}`);
                    } else {
                        res.status(200).send({domain: domain, tutorials: result});
                    }
                });
            },
    
            // res.json({
            //         "topic":"Javascript",
            //         "domain": "React",
            //         "tutorials": [
            //             {"tutid": 1, "topic": "Javascript", "domain": "React", "title":"Javascript The easy way", "type":"Authentication"},
            //             {"tutid": 2, "topic": "Javascript", "domain": "React", "title":"Javascript is ez", "type":"Web framework"},
            //             {"tutid": 3, "topic": "Javascript", "domain": "React", "title":"Javascript for noobs", "type":"Frontend framework"},
            //             {"tutid": 4, "topic": "Javascript", "domain": "React", "title":"What's new in ES2018", "type":"Authentication"},
            //             {"tutid": 5, "topic": "Javascript", "domain": "React", "title":"Javascript The easy way", "type":"Authentication"},
            //             {"tutid": 6, "topic": "Javascript", "domain": "React", "title":"Javascript is ez", "type":"Web framework"},
            //             {"tutid": 7, "topic": "Javascript", "domain": "React", "title":"Javascript for noobs", "type":"Frontend framework"},
            //             {"tutid": 8, "topic": "Javascript", "domain": "React", "title":"What's new in ES2018", "type":"Authentication"},
            //             {"tutid": 9, "topic": "Javascript", "domain": "React", "title":"Javascript The easy way", "type":"Authentication"},
            //             {"tutid": 10, "topic": "Javascript", "domain": "React", "title":"Javascript is ez", "type":"Web framework"},
            //             {"tutid": 11, "topic": "Javascript", "domain": "React", "title":"Javascript for noobs", "type":"Frontend framework"},
            //             {"tutid": 12, "topic": "Javascript", "domain": "React", "title":"What's new in ES2018", "type":"Authentication"},
            //             {"tutid": 13, "topic": "Javascript", "domain": "React", "title":"Javascript for noobs", "type":"Frontend framework"},
            //             {"tutid": 14, "topic": "Javascript", "domain": "React", "title":"What's new in ES2018", "type":"Authentication"},
            //             {"tutid": 15, "topic": "Javascript", "domain": "React", "title":"Javascript The easy way", "type":"Authentication"},
            //             {"tutid": 16, "topic": "Javascript", "domain": "React", "title":"Javascript is ez", "type":"Web framework"},
            //             {"tutid": 17, "topic": "Javascript", "domain": "React", "title":"Javascript for noobs", "type":"Frontend framework"},
            //             {"tutid": 18, "topic": "Javascript", "domain": "React", "title":"What's new in ES2018", "type":"Authentication"}
            //         ]
            //     })
        };
    
        


