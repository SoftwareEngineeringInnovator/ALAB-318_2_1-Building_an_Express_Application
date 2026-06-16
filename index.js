// ALAB 318.2.1 - Building an Express Application

// Import express to create the server
import express from "express";

// Create Express application
const app = express();

// Set port number
const port = 3000;

// Create route to test that the server works
app.get("/", (req, res) => {
    res.send("CyberSafe Express App is running.");
});

// Start the server
app.listen(port, () => {
    console.log("Listening on port: " + port);
});