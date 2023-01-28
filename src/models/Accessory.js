const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    id: (ObjectId),
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        // http / https validation
    },
    description: {
        type: String,
        required: true,
        maxlength: 50,
        //   http / https validation,

    },
    //cubes: (ObjectId, ref Cubes Model)

});


const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;