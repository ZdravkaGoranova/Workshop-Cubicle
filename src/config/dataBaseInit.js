const mongoose = require('mongoose');

const config = require('./index.js') //името на базата дани/cubicle

async function initDataBase() {
    mongoose.set('strictQuery', false);

    await mongoose.connect(config.DB_URI);

    console.log('DB connected');
}

module.exports = initDataBase;