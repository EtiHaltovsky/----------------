var express = require('express');
var app = express();

// app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    // const config = {

    //     db: {
    //         database: 'unite',
    //         server: 'localhost',
    //         user: 'uniteSQL',
    //         password: '123456',
    //         options: {
    //             trustServerCertificate: true
                
    
    //         }
    //     }
    // }
    // module.exports = config;
    

//     // connect to your database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query('select * from users', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             // res.send(recordset);
            
//         });
//     });
// // });
// var server = app.listen(8008, function () {
//     console.log('Server is running..');
// });
