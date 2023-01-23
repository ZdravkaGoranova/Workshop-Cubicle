const db = require('../db.json');

exports.getHomePage = (req, res) => {
    res.render('index', { cubes: db.cubes });//на index подаваме всички файлове,които са записани в   db.cubes
    // res.render('index');за начало после не ни трябва
};
exports.getAboutPage = (req, res) => {
    res.render('about')
};