const User = require('../models/User.js');
const config = require('../config/index.js');
const jwt = require('../lib/jsonwebtoken.js')

exports.getUserByUsername = (username) => User.findOne({ username });

exports.register = (username, password) => User.create({ username, password });//връща promise от документа на създаден user

exports.login = async (username, password) => {
    //console.log(this);//this сочи към modol, в който сме

    const user = await this.getUserByUsername(username);
    const isValid = await user.validatePassword(password);

    //   if (!user ||!isValid или if (!(user ||!isValid))
    if (!user) {
        throw 'Invalid username or password!';
    }
    if (!isValid) {
        throw 'Invalid username or password!';
    }

    const payload = { username: user.username };
    const token = await jwt.sing(payload,config.SECRET,{expiresIn:'2h'})

    return token;
};