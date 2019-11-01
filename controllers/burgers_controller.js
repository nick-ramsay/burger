const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    var hbsObject;
    burger.selectAll(function(data) {
        hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
    });
    res.render("index", {
        burgers: hbsObject
    });
});

module.exports = router;