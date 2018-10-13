const Sequelize = require("sequelize");
const db = require("../db-connection");
const Topic = require("./Topic");
const Tutorial = require("./Tutorial");

const Domain = db.define('Domain', {
    domainId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    domain: Sequelize.STRING,
    type: Sequelize.STRING,
    tutorialcount: Sequelize.INTEGER
});


Domain.hasMany(Tutorial,{foreignKey: 'domainId'})

// Domain.belongsTo(Topic, {foreignKey: 'topicId'});


// // Use this to deploy a table to the database
// db.sync({force:true}).then((err) => {
//     if(err){
//         console.log('An error occur while creating table');
//     }else{
//         console.log('Item table created successfully');
//     }
// });

module.exports = Domain;

