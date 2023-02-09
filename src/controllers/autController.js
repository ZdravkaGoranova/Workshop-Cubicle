const router = require('express').Router();

const User = require('../models/User.js');
const authService = require('../services/authService.js')
const { parseMongooseError } = require('../utils/errorUtils.js')

router.get('/login', (req, res) => {
    res.render('auth/login')
})
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password);
        res.cookie('auth', token, { httpOnly: true });//не искаме JS да се бърника в cookies ->httpOnly: true
        console.log(token);
    }
    catch (err) {
        // console.log(err);
        console.log(err.message);
        return res.render('auth/login', { error: err.message })
    }
    res.redirect("/");
})


router.get('/register', (req, res) => {
    res.render('auth/register')
})
router.post('/register', async (req, res, next) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        // return next(new Error(`Password missmatch!`))
        return res.render('auth/register', { error: 'Password missmatch!' })
    }

    const existingUser = await authService.getUserByUsername(username)

    if (existingUser) {
        // return next(new Error(`Password missmatch!`))
        return res.render('auth/register', { error: 'User alredy exist!' })
    }

    try {
        const user = await authService.register(username, password);
        console.log(user);
    } catch (err) {
        // console.log(err.errors);
        //console.log(err.message);
        //const errors = err.errors[0];

        const errors = parseMongooseError(err)// Object.keys(err.errors).map(key => err.errors[key].message);

        // console.log(errors);
        return res.render('auth/register', { err: errors[0] })
        //  return next(err);
    }

    res.redirect("/login");
})


router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/')
});


module.exports = router;