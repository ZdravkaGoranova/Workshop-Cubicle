
const Cube = require('../models/Cube.js');

exports.getOne = (cubeId) => Cube.findById(cubeId).lean();