console.log("Starting my workshop :)");

const express = require('express');
const app = express();
const config = require('./config.js');

app.get('/', (req, res) => {
    res.send('Home page');

});


app.listen(config.PORT, ()=>console.log(`Server is running on port ${config.PORT}...`))