const Sequelize = require("sequelize");
const db = require("../sequelize-connection");

const Item = db.define('Item', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    qty: Sequelize.INTEGER
});


module.exports = Item;
// //Applying Item Table to database
// db.sync({force:true}).then((err) => {
//     if(err){
//         console.log('An error occur while creating table');
//     }else{
//         console.log('Item table created successfully');
//     }
// });
