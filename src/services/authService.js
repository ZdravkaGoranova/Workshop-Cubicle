const User = require('../models/User.js');
const config = require('../config/index.js');
const jwt = require('../lib/jsonwebtoken.js')

exports.getUserByUsername = (username) => User.findOne({ username });

const AppError = require('../utils/AppError.js')

exports.register = (username, password) => User.create({ username, password });//връща promise от документа на създаден user

exports.login = async (username, password) => {
    //console.log(this);//this сочи към modol, в който сме

    const user = await this.getUserByUsername(username);
    console.log(user)
    const isValid = await user.validatePassword(password);

    //   if (!user ||!isValid или if (!(user ||!isValid))
    console.log(isValid)
    if (!user ) {

        throw new AppError('Invalid username!', { user })

        // throw new Error('Invalid username!')
        //или
        // throw {
        //     message: 'Invalid username!',
        //     data: user
        // };
    }
    if (!isValid) {

        throw new AppError('Invalid password!')

        //throw new Error('Invalid password!')
        //или
        // throw {
        //     message: 'Invalid  password!'
        // };
    }

    const payload = { _id: user._id, username: user.username };
    const token = await jwt.sing(payload, config.SECRET, { expiresIn: '2h' })

    return token;
};