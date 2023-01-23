const Cube = require('../models/Cube.js');

exports.getCreateCube = (req, res) => {//const getCreateCube = (req, res) =>
    res.render('create');
};
exports.postCreateCube = (req, res) => {
    console.log(req.body);//Object на данните от url

    //save cube

    const { name, description, imageUrl, difficultyLevel } = req.body
    let cube = new Cube(name, description, imageUrl, difficultyLevel);
    Cube.save(cube);

    //redirect
    res.redirect('/');
};


// module.exports = {
//     getCreateCube,
// }