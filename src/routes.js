const router = require('express').Router();
// const express = require('express');
// const Router = express.Router;
// const router = Router();

const cubeControler = require('./controllers/cubeController.js');
const homeController = require('./controllers/homeController.js');
const accessoryController = require('./controllers/accessoryController.js');
const authController = require('./controllers/autController.js');

router.get('/', homeController.getHomePage
    //(req, res) => {//Заместваме 'app'  с 'router'app.get('/', (req, res) => {
    // res.send('Home page');
    // res.render('index');//  res.render('home', { layout: false })когато не сме настойли layout
    //}
);
router.get('/about', homeController.getAboutPage);
// (req, res) => {res.render('about');});
router.get('/404', homeController.getErrorPage);


router.get('/login',authController);//router.use('/',authController);


router.get('/register',authController);//router.use('/',authController);

router.get('/cubes/create', cubeControler.getCreateCube);// app.get('/create', (req, res) => { res.render('create'); });
router.post('/cubes/create', cubeControler.postCreateCube);

router.get('/cubes/:cubeId/details', cubeControler.getDetails);//път към детайла

router.get('/cubes/:cubeId/attach', cubeControler.getAttachAccessory);
router.post('/cubes/:cubeId/attach', cubeControler.postAttachAccessory);



router.use('/accessories', accessoryController);

module.exports = router;