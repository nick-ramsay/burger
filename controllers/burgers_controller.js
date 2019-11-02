const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var devouredID = req.params.id;
  burger.updateOne("burgers", "devoured", 1, "id", devouredID);
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(req.body.burger_name);
});

module.exports = router;