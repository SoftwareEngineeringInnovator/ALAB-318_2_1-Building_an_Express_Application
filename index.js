// ALAB 318.2.1 - Building an Express Application

// Import express to create the server
import express from "express";

// Create Express application
const app = express();

// Set port number
const port = 3000;

// Files from the public folder: CSS
app.use(express.static("public"));

// Turn form data into something we can we can work with inside body/req.body
app.use(express.urlencoded());

// Set EJS
app.set("view engine", "ejs");

// Middleware logs basic information about every request
app.use((req, res, next) => {
    const requestTime = new Date().toLocaleTimeString();

    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);
    console.log("Request Time:", requestTime);

    next();
});

// Cybersecurity tips data that will be sent to the EJS view
let cyberTips = [
    "Use strong passwords.",
    "Turn on multi-factor authentication.",
    "Do not click suspicious links.",
    "Keep your software updated."
];

// Route that redirects the user to the home page
app.get("/", (req, res) => {
    res.redirect("/home");
});

// Home route that renders the index.ejs file
app.get("/home", (req, res) => {
    res.render("index", {
        title: "CyberSafe Express App",
        message: "Welcome to CyberSafe Express App",
        cyberTips: cyberTips
    });
});

// About route that renders the about.ejs file
app.get("/about", (req, res) => {
    res.render("about", {
        title: "About CyberSafe"
    });
});

// Tips route that renders tip/topics by evaluating if/else statement from tips.ejs page
app.get("/tips/:topic", (req, res) => {
    res.render("tips", {
        title: "Cybersecurity Tips",
        topic: req.params.topic
    });
});

// POST route for the form - created in the About page
app.post("/submit", (req, res) => {
    console.log("POST route");
    console.log(req.body);

    // res.send("Form submitted successfully!"); - Office hours - check the terminal to see the message

    // Send the form information to the success page so it can be displayed
    res.render("success", {
        title: "Form Submitted",
        name: req.body.name,
        concern: req.body.concern
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

