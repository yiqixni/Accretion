// import Nodejs modules using require function 
const express = require("express"); // import express library 
const bodyParser = require("body-parser"); // import body-parser module
const app = express(); 
const path = require("path");

// Middleware setup 
app.use(bodyParser.urlencoded({extended: true})); // parse the URL-encoded data 
// app.use(express.static("public")); // serves the static files in the public directory 

// For any route, serve the contact.html
app.get('*', (req, res) => {
    console.log("send file from", path.join(__dirname, '/public/contact.html'));
    res.sendFile(path.join(__dirname, '/public/contact.html'));
});

// Form submission handling 
app.post('/submit', (req, res) => { // routes the submitted form to /sumbit directory
    console.log("submit button is clicked");
    const formData = req.body; // declare the formData from client request 
    console.log(formData); 
    res.send("Thanks for contacting us!"); // server response to the client 
})

// Start the server 
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});

console.log("end of contact.js script"); 