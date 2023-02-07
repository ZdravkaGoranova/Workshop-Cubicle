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
        match: [/^http[s]?:\/\//, 'Invalid URL'], // http / httpsvalidation 
        
        //или втори  вариянт на match: 
        // validate: {
        //     validator: function (value) {
        //         return value.startsWith('http://') || value.startsWith('https://')
        //     }
        //message:'URL is invalid!'
        // }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,//всяко objectid ще сочи към референция Accessory
        ref: 'Accessory'//името на модела към който ще сочи референцията
    }],
    owner:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
});





const Cube = new mongoose.model('Cube', cubeShema);//const Cube = model

module.exports = Cube;