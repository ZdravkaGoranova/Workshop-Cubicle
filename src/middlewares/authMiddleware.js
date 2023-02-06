const jwt = require('../lib/jsonwebtoken.js');
const config = require('../config/index.js');

exports.authentication = async (req, res, next) => {
    const token = req.cookies["auth"];

    if (token) {
        //privet user
        try {
            const decodedToken = await jwt.verify(token, config.SECRET)

            req.user = decodedToken; //слагаме допълнителна информация за user
            req.isAuthenticated = true;

        } catch (err) {
            console.log(err.message);

            res.clearCookie('auth');//махаме му token за да не влиза повече в тази грешка
            res.redirect('/404');
        }
    }
    //publick user
    next();
};

exports.isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated) {
        return res.redirect('/login');
    }
    next();
}