// ALAB 318.2.1 - Building an Express Application

// Import express to create the server
import express from "express";

// Create Express application
const app = express();

// Set port number
const port = 3000;

// Files from the public folder: CSS
app.use(express.static("public"));

// Set EJS
app.set("view engine", "ejs");

// Cybersecurity tips data that will be sent to the EJS view
let cyberTips = [
    "Use strong passwords.",
    "Turn on multi-factor authentication.",
    "Do not click suspicious links.",
    "Keep your software updated."
];

// Home route that renders the index.ejs file
app.get("/", (req, res) => {
    res.render("index", {
        title: "CyberSafe Express App",
        message: "Welcome to CyberSafe Express App",
        cyberTips: cyberTips
    });
});

// Start the server
app.listen(port, () => {
    console.log("Listening on port: " + port);
});


// Test Connectivity Code

// * Create route to test that the server works
// app.get("/", (req, res) => {
//     res.send("CyberSafe Express App is running.");
// });

