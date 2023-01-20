console.log("Starting my workshop :)");

const express = require('express');
const app = express();

const config = require('./config');//Ако файла се казва различно име от index.js, примерно config.js->require('./config/config.js');
const setupViewEngine = require('./config/viewEngine.js');
setupViewEngine(app);
// или require('./config/viewEngine.js')(app);

app.get('/', (req, res) => {
    // res.send('Home page');
    res.render('home');//  res.render('home', { layout: false })когато не сме настойли layout
});


app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`))