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
  console.log("Devoured clicked!");
  console.log(req.params);
  var devouredID = req.params.id;
  burger.updateOne("burgers", "devoured", 1, "id", devouredID).then(function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  console.log(req.body.burger_name);
  burger.insertOne(req.body.burger_name)
    .then(function (result) {
      res.json({ id: result.insertId });
    });
});

module.exports = router;