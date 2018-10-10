const Sequelize = require("sequelize");
 
//Setting up the config
var db = new Sequelize('tutorials', 'root', 'password', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: false
});

db.authenticate((err) => {
    if (err) {
       console.log('There is connection in ERROR');
    } else {
       console.log('Connection has been established successfully');
    }
});



module.exports = db;





