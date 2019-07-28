const express = require('express');
const path = require('path');


let PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));


// Use morgan logger for logging requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use()



// Make public a static folder
app.use(express.static(path.join(__dirname, 'public')));

require('./router.js')(app);

// Start the server
app.listen(PORT, () => console.log("App running on port " + PORT + "!"));
