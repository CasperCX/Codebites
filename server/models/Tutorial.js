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
    title: Sequelize.STRING,
    body: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: "Required"
           },
           len: {
               args: [4,1000],
               msg: "String length is not in this range"
          }
      },
        defaultValue: null
    }
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

