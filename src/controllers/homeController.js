//const db = require('../db.json');
const Cube = require('../models/Cube.js');

exports.getHomePage = async (req, res) => {
    //console.log(req.query);
    const { search, from: difficultyFrom, to: diffficultyTo } = req.query;

    let cubes = await Cube.find().lean();//.lean()=вземи всички кубове от db и ги направи обекти 
    //let cubes = db.cubes;

    //TODO: Use db filtration instead of in memory filtering
    if (search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (difficultyFrom) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= difficultyFrom);
    }
    if (diffficultyTo) {
        cubes = cubes.filter(cube => cube.difficultyLevel <= diffficultyTo);
    }

    res.render('index', { cubes, search, difficultyFrom, diffficultyTo });//res.render('index', { cubes: cubes})== res.render('index', { cubes})
    //на index подаваме всички файлове,които са записани в   db.cubes
    // res.render('index');за начало после не ни трябва
};

exports.getAboutPage = (req, res) => {
    res.render('about')
};

exports.getErrorPage = (req, res) => {
    res.render('404');
};