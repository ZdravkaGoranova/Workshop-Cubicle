const router = require('express').Router();

const User = require('../models/User.js');
const authService = require('../services/authService.js')


router.get('/login', (req, res) => {
    res.render('auth/login')
})
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password);
        res.cookie('auth', token, { httpOnly: true });//не искаме JS да се бърника в cookies ->httpOnly: true
        // console.log(token);
    }
    catch (err) {
        console.log(err);
    }
    res.redirect("/");
})


router.get('/register', (req, res) => {
    res.render('auth/register')
})
router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        return res.status(404).end();//res.redirect(404)
    }

    const existingUser = await authService.getUserByUsername(username)

    if (existingUser) {
        return res.status(404).end();//res.redirect(404)
    }
    const user = await authService.register(username, password);

    console.log(user);

    res.redirect("/login");
})


router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/')
});


module.exports = router;