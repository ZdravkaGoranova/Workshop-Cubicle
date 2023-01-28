//const Cube = require('../models/Cube_old.js');
const Cube = require('../models/Cube.js');

const db = require('../db.json');

exports.getCreateCube = (req, res) => {//const getCreateCube = (req, res) =>
    res.render('create');
};
exports.postCreateCube = async (req, res) => {
    // console.log(req.body);//Object на данните от url

    //save cube
    const { name, description, imageUrl, difficultyLevel } = req.body
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });
    await cube.save();//запазва в db

    //redirect
    res.redirect('/');
};
exports.getDetails = async (req, res) => {
    // let cubeId = Number(req.params.cubeId);// let cube = db.cubes.find(x => x.id == req.params.cubeId)
    // if (!cubeId) {// в случай,че нямаме id=0
    //     return res.redirect('/404');
    // }

    const cube = await Cube.findById(req.params.cubeId).lean()

    if (!cube) {
        return res.redirect('/404');
    }
    res.render('details', { cube })
};


// module.exports = {
//     getCreateCube,
// }