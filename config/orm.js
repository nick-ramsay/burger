const connection = require("./connection.js");

const orm = {
    selectAll: function(table, cb) {
        const queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err,result){
            if (err) {
                throw err;
            };
            cb(result);
        });
    },
    insertOne: function(table, column, newValue, cb) {
        const queryString = "INSERT INTO ??(??) VALUES (?)";
        connection.query(queryString, [table,column,newValue], function (err,result) {
            if (err) {
                throw err;
            }
        });
    },
    updateOne: function(table, updateColumn, newValue, targetColumn, targetValue, cb) {
        const queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?;"
        connection.query(queryString, [table, updateColumn, newValue, targetColumn, targetValue], function (err,result){
            if (err) {
                throw err;
            }
        });
    }
};

module.exports = orm;