const Cube = require('../models/Cube.js');
const db = require('../db.json');

exports.getCreateCube = (req, res) => {//const getCreateCube = (req, res) =>
    res.render('create');
};
exports.postCreateCube = (req, res) => {
    // console.log(req.body);//Object на данните от url

    //save cube
    const { name, description, imageUrl, difficultyLevel } = req.body
    let cube = new Cube(name, description, imageUrl, difficultyLevel);
    Cube.save(cube);

    //redirect
    res.redirect('/');
};
exports.getDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);// let cube = db.cubes.find(x => x.id == req.params.cubeId)

    if (!cubeId) {// в случай,че нямаме id=0
        return res.redirect('/404');
    }
    let cube = db.cubes.find(x => x.id === cubeId);
    if (!cube) {
        return res.redirect('/404');
    }
    res.render('details', { cube })
};


// module.exports = {
//     getCreateCube,
// }