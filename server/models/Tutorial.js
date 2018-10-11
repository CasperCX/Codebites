const Sequelize = require("sequelize");
const db = require("../sequelize-connection");
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

Tutorial.belongsTo(Domain);

// Applying Table to database
db.sync({force:true}).then((err) => {
    if(err){
        console.log('An error occur while creating table');
    }else{
        console.log('Item table created successfully');
    }
});

module.exports = Tutorial;

