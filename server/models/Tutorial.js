const Sequelize = require("sequelize");
const db = require("../db-connection");
const Domain = require("./Domain");

const Tutorial = db.define('Tutorial', {
    tutorialId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    tutorialcount: Sequelize.INTEGER
});

// Tutorial.belongsTo(Domain, {as: 'tutorial'}); 

// Use this to deploy a table to the database
// db.sync({force:true}).then((err) => {
//     if(err){
//         console.log('An error occur while creating table');
//     }else{
//         console.log('Item table created successfully');
//     }
// });

module.exports = Tutorial;

