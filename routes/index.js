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

router.get("/admin", (req, res) => {
    let sess = req.session;

    if (sess.adminKey) {
        res.status(200).end("Allow viewing of admin page here.");
    } else {
        res.status(200).end("Show login page here.");
    }
});

/*router.get("/admin/creations", (req, res) => {
    let sess = req.session;

    if (sess.adminKey) {
        res.status(200).json({ response: "Valid. " });
    } else {
        res.status(400).json({ error: "Not an administrator." });
    }
});*/

// File access fallback
router.get("/:file", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", req.params.file));
});

module.exports = router;
