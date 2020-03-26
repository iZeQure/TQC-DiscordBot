const MySql = require('mysql');
const { Database } = require('./config.json');

const connection = MySql.createConnection({
    host        : Database.information.host,
    port        : Database.information.port,
    user        : Database.information.user,
    password    : Database.information.password,
    database    : Database.information.catalogue
});

connection.connect(function(error) {
    if (error) return console.error(error.message);
    
    console.info(`Connected to ${Database.name} Database!`);

    connection.query("SELECT * FROM tqcdb.news", (error, results, fields) => {
        if (error) return console.error(`Error : ${error.message}`); 
    
        console.log(results);
    });
});