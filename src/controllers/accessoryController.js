const router = require('express').Router();

const Accessory = require('../models/Accessory.js')

//URL:/accessory/create
router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl } = req.body;

    const accessoryDb = await Accessory.create({ name, description, imageUrl })
    //или  
    //let аccessory = new Accessory({ name, description, imageUrl })
    //await аccessory.save();//запазва в db

    res.redirect('/');
});


module.exports = router;