const orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(vals, cb) {
      orm.insertOne("burgers", "burger_name", vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(table, updateColumn, newValue,targetColumn,targetValue,cb) {
      orm.updateOne(table, updateColumn, newValue, targetColumn,targetValue, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;
  