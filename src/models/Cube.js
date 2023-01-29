const mongoose = require('mongoose');
//const {Schema,model}=require('mongoose');

const cubeShema = new mongoose.Schema({//const cubeShema = new Schema
    //Id - (ObjectId)	
    name: {
        type: String,
        required: true//ако не отговаря на условията няма да се запази в db
    },
    description: {
        type: String,
        required: true,
        maxlength: 50
    },
    imageUrl: {
        type: String,
        required: true,
        // http / https validation:,
    },
    difficultyLevel: {
        type: String,
        required: true,
        min: 1,
        max: 6,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,//всяко objectid ще сочи към референция Accessory
        ref:'Accessory'//името на модела към който ще сочи референцията
    }]


});

const Cube = new mongoose.model('Cube', cubeShema);//const Cube = model

module.exports = Cube;