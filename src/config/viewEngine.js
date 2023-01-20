const handlebars = require('express-handlebars');

function setupViewEngine(app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',//допълнителна настройка за main.handlebars ==main.hbs
        //layoutDir//Ако искаме да сменим директорията на layout
        //partialsDir//Ако искаме да сменим директорията на partials
    }));

    app.set('view engine', 'hbs');
    app.set('views', './src/views');
};

module.exports = setupViewEngine;

