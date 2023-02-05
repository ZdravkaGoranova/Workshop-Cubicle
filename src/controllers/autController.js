const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('auth/login')
})
// router.post('/login', (req, res) => {

// })

router.get('/register', (req, res) => {
    res.render('auth/register')
})
// router.post('/register', (req, res) => {

// })

router.get('/logout', (req, res) => {

})
// router.post('/logout', (req, res) => {

// })


module.exports = router;