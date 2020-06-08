const mysql = require("mysql");

// MySQL database connection
const databaseConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "ahlgreen_net",
});

databaseConnection.connect((err) => {
    console.error("Outputting from here.");

    if (err) {
        console.error("Failed to connect to MySQL database:", err);
    } else {
        console.log("Successfully connected to MySQL database.");
    }
});

module.exports = databaseConnection;
