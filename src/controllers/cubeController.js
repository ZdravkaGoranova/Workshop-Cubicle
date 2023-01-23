const Cube = require('../models/Cube.js');

exports.getCreateCube = (req, res) => {//const getCreateCube = (req, res) =>
    res.render('create');
};
exports.postCreateCube = (req, res) => {
    console.log(req.body);//Object на данните от url

    //save cube
    let cube = new Cube(req.body);
    Cube.save(cube);

    //redirect
    res.redirect('/');
};


// module.exports = {
//     getCreateCube,
// }