#!/usr/bin/env nodejs
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const MySQLStore = require("express-mysql-session")(session);

// Create server
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Cookie parser
app.use(cookieParser());

// CORS Middleware
app.use(cors());

// Express-Session
app.set("trust proxy", 1);

let sessionStore = new MySQLStore({
    host: "localhost",
    port: "3306",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "ahlgreen_net",
});

app.use(
    session({
        cookie: {
            secure: process.env.NODE_ENV == "production",
            maxAge: 60000,
        },
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Set static folder
app.use(express.static(path.join(__dirname, "build")));
app.use("/public", express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index"));
app.use("/api", require("./routes/api"));

// Clear session store
sessionStore.clear((err) => {
    if (err) console.error(err);
    console.log("Cleared session storage.");
});

// Listen on port
app.listen(process.env.PORT, "0.0.0.0", () =>
    console.log(`App listening on PORT ${process.env.PORT}`)
);
