const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to Pug and specify the views directory
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Set up middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('./routes/index');
const charactersRouter = require('./routes/characters');
app.use('/', indexRouter);
app.use('/characters', charactersRouter);

// Define the port to listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

console.log(`View the application at http://localhost:${port}`);