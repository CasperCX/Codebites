const Sequelize = require("sequelize");
const db = require("../db-connection");
const Domain = require("./Domain");

const Tutorial = db.define('Tutorial', {
    tutorialId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    topic: Sequelize.STRING,
    domain: Sequelize.STRING,
    title: Sequelize.STRING
});


// Tutorial.belongsTo(Domain, {foreignKey: 'domainId'});

// Use this to deploy a table to the database
// db.sync({force:true}).then((err) => {
//     if(err){
//         console.log('An error occur while creating table');
//     }else{
//         console.log('Item table created successfully');
//     }
// });

module.exports = Tutorial;

