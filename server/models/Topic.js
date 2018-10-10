const Sequelize = require("sequelize");
const db = require("../sequelize-connection");

const Topic = db.define('Topic', {
    topicid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    tutorialcount: Sequelize.INTEGER
});


// Applying Table to database
// db.sync({force:true}).then((err) => {
//     if(err){
//         console.log('An error occur while creating table');
//     }else{
//         console.log('Item table created successfully');
//     }
// });

module.exports = Topic;

