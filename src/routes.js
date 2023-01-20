const router = require('express').Router();
// const express = require('express');
// const Router = express.Router;
// const router = Router();

const cubeControler = require('./controllers/cubeController.js');

router.get('/', (req, res) => {//Заместваме 'app'  с 'router'app.get('/', (req, res) => {
    // res.send('Home page');
    res.render('index');//  res.render('home', { layout: false })когато не сме настойли layout
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', cubeControler.getCreateCube);
// app.get('/create', (req, res) => {
//     res.render('create');
// });

module.exports = router;