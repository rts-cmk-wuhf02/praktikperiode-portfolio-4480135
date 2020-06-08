const express = require("express");
const router = express.Router();
const path = require("path");

// Routes
router.get(
    ["/", "/index", "/creations", "/creation/*", "/contact"],
    (req, res) => {
        res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
    }
);

router.get("/:file", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", req.params.file));
});

module.exports = router;
