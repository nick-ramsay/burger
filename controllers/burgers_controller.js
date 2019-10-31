const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    console.log("Testing get...");
    console.log(burger);
    burger.selectAll(function (data) {
        var burger = {
            burger: data
        };
        console.log(burger);
        res.render("index", burger);
    });
});

module.exports = router;