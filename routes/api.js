const databaseConnection = require("../database");
const express = require("express");
const router = express.Router();

// Credentials and generated keys
const generatedKeys = [];
const credentials = [
    {
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD,
    },
];

// Generates an API key
const generateKey = (username) => {
    let key = generatedKeys.find((key) => {
        return key.username == username;
    });

    if (!key) {
        // TODO: Come up with a method to create keys randomly
        key = (
            parseInt(new Buffer.from(username).join("")) *
            (Math.random() * 10)
        ).toString(16);

        generatedKeys.push({ username, key });
    } else {
        key = key.key;
    }

    return key;
};

// Check if key is valid
const validateKey = (key) => {
    if (
        generatedKeys.find((generatedKey) => {
            return generatedKey.key == key;
        }) == undefined
    ) {
        return false;
    } else {
        return true;
    }
};

// Routes
router.post("/login", (req, res) => {
    if (
        req.body != undefined &&
        req.body.username != undefined &&
        req.body.password != undefined
    ) {
        for (let i = 0; i < credentials.length; i++) {
            if (
                req.body.username == credentials[i].username &&
                req.body.password == credentials[i].password
            ) {
                req.session.adminKey = generateKey(req.body.username);
                res.redirect("/admin");
                return;
            }
        }
    }

    res.status(400).json({
        error: "Request body must contain a valid username and password",
    });
});

router.post("/validate", (req, res) => {
    if (req.session.adminKey) {
        res.json({ valid: validateKey(req.session.adminKey) });
    } else {
        res.json({ valid: false });
    }
});

router.post("/insert/:type", (req, res) => {
    if (req.session.adminKey && !validateKey(req.session.adminKey)) {
        res.status(400).json({ error: "Invalid API key." });
        return;
    }

    if (req.query.type == "creations") {
        res.status(200).json({ response: "No response." });
    }
});

router.post("/alter/:type", (req, res) => {
    if (req.session.adminKey && !validateKey(req.session.adminKey)) {
        res.status(400).json({ error: "Invalid API key." });
        return;
    }

    if (req.query.type == "creations") {
        res.status(200).json({ response: "No response." });
    }
});

router.get("/get/:type", (req, res) => {
    if (req.params.type == "creations") {
        databaseConnection.query(
            "SELECT * FROM `" + req.params.type + "`",
            (err, resp) => {
                if (err) {
                    res.status(400).json({ error: "An error occured: " + err });
                    return;
                }

                res.status(200).json(resp);
            }
        );
    } else {
        res.status(400).json({ error: "Invalid type." });
    }
});

router.get("/get/:type/:url_slug", (req, res) => {
    if (req.params.type == "creations") {
        databaseConnection.query(
            "SELECT * FROM `" +
                req.params.type +
                '` WHERE url_slug="' +
                req.params.url_slug +
                '"',
            (err, resp) => {
                if (err) {
                    res.status(400).json({ error: "An error occured: " + err });
                    return;
                }

                res.status(200).json(resp);
            }
        );
    } else {
        res.status(400).json({ error: "Invalid type." });
    }
});

module.exports = router;
