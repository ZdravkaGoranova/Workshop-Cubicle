const router = require('express').Router();
// или const express = require('express');
// const Router = express.Router;
// const router = Router();

const cubeControler = require('./controllers/cubeController.js');
const homeController = require('./controllers/homeController.js');
const accessoryController = require('./controllers/accessoryController.js');
const authController = require('./controllers/autController.js');
const { isAuthenticated } = require('./middlewares/authMiddleware.js')
const { handleRequest } = require('./utils/requestUtils.js')

router.get('/', homeController.getHomePage
    //(req, res) => {//Заместваме 'app'  с 'router'app.get('/', (req, res) => {
    // res.send('Home page');
    // res.render('index');//  res.render('home', { layout: false })когато не сме настойли layout
    //}
);
router.get('/about', homeController.getAboutPage);// (req, res) => {res.render('about');});
router.get('/404', homeController.getErrorPage);


router.get('/login', authController);//router.use('/',authController);

router.use('/', authController);
//Ако използваме router.use('/',authController); няма нужда от следните два реда
// router.get('/register',authController);
// router.post('/register',authController);

router.get('/cubes/create', isAuthenticated, handleRequest(cubeControler.getCreateCube));// app.get('/create', (req, res) => { res.render('create'); });
router.post('/cubes/create', isAuthenticated, handleRequest(cubeControler.postCreateCube));

router.get('/cubes/:cubeId/details', handleRequest(cubeControler.getDetails));//път към детайла
router.get('/cubes/:cubeId/edit', isAuthenticated, handleRequest(cubeControler.getEditCube));
router.post('/cubes/:cubeId/edit', handleRequest(cubeControler.postEditCube));

router.get('/cubes/:cubeId/delete', handleRequest(cubeControler.getDeleteCube));
router.post('/cubes/:cubeId/delete', handleRequest(cubeControler.postDeleteCube));

router.get('/cubes/:cubeId/attach', handleRequest(cubeControler.getAttachAccessory));
router.post('/cubes/:cubeId/attach', handleRequest(cubeControler.postAttachAccessory));



router.use('/accessories', accessoryController);

module.exports = router;