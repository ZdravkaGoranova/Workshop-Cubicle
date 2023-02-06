const util = require('util');
const jwtCallback = require('jsonwebtoken');
const { Promise } = require('mongoose');

const jwt = {// трансформира callback  базирана function в promisse function
    sing: util.promisify(jwtCallback.sign),//.promisify ->взима асинхронна ф-ция, която работи с callback 
    //и я обръща в финция ,която работи с promise
    verify: util.promisify(jwtCallback.verify),
};
module.exports = jwt;


//асинхронна функция-callback function  да връща promise
// function promiseSing(payload, secret, options) {
//     const promise = new Promise(function (resolve, reject) {
//         jwtCallback.sign(payload, secret, options, (err, token) => {
//             if (err) {
//                 return reject(err);
//             }
//             resolve(token);
//         })
//     })
//     return promise;
// }