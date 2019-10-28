const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req,res) {
    console.log("Testing get...");
});

module.exports = router;