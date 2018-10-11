const Sequelize = require("sequelize");
const db = require("../sequelize-connection");
const Topic = require("./Topic");
const Tutorial = require("./Tutorial");

const Domain = db.define('Tutorial', {
    domainId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    type: Sequelize.STRING,
    tutorialcount: Sequelize.INTEGER
});


Domain.belongsTo(Topic);


// Applying Table to database
db.sync({force:true}).then((err) => {
    if(err){
        console.log('An error occur while creating table');
    }else{
        console.log('Item table created successfully');
    }
});

module.exports = Domain;

