const mysql = require("mysql");

const cool = mysql.createPool({
    connectionLimit : 10,
    user: "root",
    password: "cdleon",
    host: "172.19.0.2",
    port: 3306,
    database: "PRUEBA",
    debug    :  false

});

module.exports = cool;