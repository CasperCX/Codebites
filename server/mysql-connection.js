const   mysql = require("mysql"),
        port = 3006
        // port = process.env.PORT || 3006;

connection = mysql.createConnection({
                host: '127.0.0.1',
                user: 'root',
                port: port,
                password: 'password',
                database: 'tutorials',
            });    

// let connection;
// switch(port) {
//     case !3006:
//         connection = mysql.createConnection({      //Change to live server details
//             host: 'localhost',
//             user: 'root',
//             password: 'password',
//             database: 'tutorials',
//             socketPath: '/var/lib/mysql/mysql.sock'
//         });
       
//     default:
//         connection = mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             port: port,
//             password: 'password',
//             database: 'tutorials'
//         });    
//     }


connection.connect((e) => {
    if(!!e) {
        console.log(e);
    } else {
        console.log("connected to database")
    }
});

module.exports = connection;

