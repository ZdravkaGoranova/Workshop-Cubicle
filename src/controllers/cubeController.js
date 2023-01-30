//const Cube = require('../models/Cube_old.js');
const Cube = require('../models/Cube.js');
const Accessory = require('../models/Accessory.js');

const db = require('../db.json');

exports.getCreateCube = (req, res) => {//const getCreateCube = (req, res) =>
    res.render('create');
};
exports.postCreateCube = async (req, res) => {
    // console.log(req.body);//Object на данните от url

    try {
    
        //save cube
        const { name, description, imageUrl, difficultyLevel } = req.body
        let cube = new Cube({ name, description, imageUrl, difficultyLevel });
        await cube.save();//запазва в db

    } catch (err) {
        console.log(err.message);
        return res.redirect('/404');
    }
    //redirect
    res.redirect('/');
};
exports.getDetails = async (req, res) => {
    // let cubeId = Number(req.params.cubeId);// let cube = db.cubes.find(x => x.id == req.params.cubeId)
    // if (!cubeId) {// в случай,че нямаме id=0
    //     return res.redirect('/404');
    // }

    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean()
    //взимаме даден куб с данните за аксецуарите му

    if (!cube) {
        return res.redirect('/404');
    }
    res.render('cube/details', { cube });
};

exports.getAttachAccessory = async (req, res) => {

    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({ _id: { $nin: cube.accessories } }).lean();//{ $nin: cube.accessories } Matches none of the values specified in an array.
    //намерими всички accessory на които ид-ти им  не се намира в текущия куб в неговите accessories
    res.render('cube/attach', { cube, accessories });
}

exports.postAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId);//това инстанция на модела, който наричаме  документ,който може да го променяме
    const accessoriId = req.body.accessory;
    //console.log(accessoriId);
    cube.accessories.push(accessoriId);

    await cube.save();

    res.redirect(`/cubes/${cube._id}/details`);
}

// module.exports = {
//     getCreateCube,
// }