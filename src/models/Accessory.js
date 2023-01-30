const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        match: [/^http[s]?:\/\//, 'Invalid URL'], // http / httpsvalidation
    },
    description: {
        type: String,
        required: true,
        maxlength: 50,
    },
    //cubes: (ObjectId, ref Cubes Model)
});


const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;