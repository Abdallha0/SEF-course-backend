const express = require('express');
const hbs = require('hbs');
const app = express();

// Set hbs as the view engine
app.set('view engine', 'hbs');

// Render a template
app.get('/', (req, res) => {
    res.render('index', { title: 'Home', message: 'Hello World' });
});