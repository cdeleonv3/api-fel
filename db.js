const mysql = require("mysql");

const cool = mysql.createPool({
    connectionLimit : 10,
    user: "root",
    password: "cdleon",
    host: "192.168.0.26",
    port: 3307,
    database: "PRUEBA",
    debug    :  false

});

module.exports = cool;