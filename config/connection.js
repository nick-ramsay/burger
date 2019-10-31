
require("dotenv").config();

const keys = require("./keys.js");
const mysql = require("mysql");

console.log("Port: " + keys);
console.log("PW: " + keys.mysql.pw);
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    //port: keys.mysql.port,
    user: "root",
    password: "data.Dump89",
    //password: keys.mysql.pw,
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;