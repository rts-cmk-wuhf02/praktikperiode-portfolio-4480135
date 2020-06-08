const databaseConnection = require("../database");
const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
    res.status(200).json({ response: "valid" });
});

router.get("/creations", (req, res) => {
    res.status(200).json({ response: "valid" });
});

module.exports = router;

// Confirmed: Code outside of functions in imported module only runs once, independantly of the amount of times it is imported. Use database.
