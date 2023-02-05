const util = require('util');
const jwtCallback = require('jsonwebtoken');

const jwt = {// трансформира callback  базирана function в promisse function
    sing: util.promisify(jwtCallback.sign),
    verify: util.promisify(jwtCallback.verify),
};
module.exports = jwt;