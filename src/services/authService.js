const User = require('../models/User.js');
const config = require('../config/index.js');
const jwt = require('../lib/jsonwebtoken.js')
const AppError = require('../utils/AppError.js')


exports.getUserByUsername = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });//връща promise от документа на създаден user

exports.login = async (username, password) => {
    //console.log(this);//this сочи към modol, в който сме

    const user = await this.getUserByUsername(username);
    console.log(user)

    if (!user) {
        throw new AppError('Invalid username!', { user });

        // throw new Error('Invalid username!')
        //или
        // throw {
        //     message: 'Invalid username!',
        //     data: user
        // };
    }

    
 const isValid = await user.validatePassword(password);
    console.log(isValid)

    if (!isValid) {

        throw new AppError('Invalid password!')

        //         //throw new Error('Invalid password!')
        //         //или
        //         // throw {
        //         //     message: 'Invalid  password!'

    }

    const payload = { _id: user._id, username: user.username };
    const token = await jwt.sing(payload, config.SECRET, { expiresIn: '2h' })

    return token;
}


