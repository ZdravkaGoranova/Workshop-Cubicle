const router = require('express').Router();
// const express = require('express');
// const Router = express.Router;
// const router = Router();

const cubeControler = require('./controllers/cubeController.js');
const homeController = require('./controllers/homeController.js');
const accessoryController = require('./controllers/accessoryController.js');

router.get('/', homeController.getHomePage
    //(req, res) => {//Заместваме 'app'  с 'router'app.get('/', (req, res) => {
    // res.send('Home page');
    // res.render('index');//  res.render('home', { layout: false })когато не сме настойли layout
    //}
);

router.get('/about', homeController.getAboutPage);
// (req, res) => {
// res.render('about');
// });

router.get('/create', cubeControler.getCreateCube);
// app.get('/create', (req, res) => {
//     res.render('create');
// });

router.post('/create', cubeControler.postCreateCube);

router.get('/cubes/:cubeId/details', cubeControler.getDetails);

router.get('/404', homeController.getErrorPage);

router.get('/cubes/:cubeId/attach', cubeControler.getAttachAccessory);
router.post('/cubes/:cubeId/attach', cubeControler.postAttachAccessory);

router.use('/accessory', accessoryController);

module.exports = router;