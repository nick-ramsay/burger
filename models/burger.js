const orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(vals, cb) {
      orm.create("burger", "burger_name", vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(updateColumn, newValue,targetColumn,targetValue,cb) {
      orm.updateOne("burgers",updateColumn, newValue, targetColumn,targetValue, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;
  