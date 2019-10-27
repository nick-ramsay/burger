const connection = require("./connection.js");

const orm = {
    selectAll: function(table) {
        const queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err,result){
            if (err) {
                throw err;
            };
            console.log(result);
        });
    },
    insertOne: function(table, column, newValue) {
        const queryString = "INSERT INTO ??(??) VALUES (?)";
        connection.query(queryString, [table,column,newValue], function (err,result) {
            if (err) {
                throw err;
            }
            console.log(result);
        });
    },
    updateOne: function(table, updateColumn, newValue, targetColumn, targetValue) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;"
        connection.query(queryString, [table, updateColumn, newValue, targetColumn, targetValue], function (err,result){
            if (err) {
                throw err;
            }
            console.log(result);
        });
    }
};

module.exports = orm;