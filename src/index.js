console.log("Starting my workshop :)");

const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./routes.js');
const config = require('./config');//Ако файла се казва различно име от index.js, примерно config.js->require('./config/config.js');

const errorHandler = require('./middlewares/errorHandlerMiddleware.js');
const authMiddleware = require('./middlewares/authMiddleware.js');

const setupViewEngine = require('./config/viewEngine.js');
const initDataBase = require('./config/dataBaseInit.js');

const app = express();//инстанция на нашия сървър
setupViewEngine(app);
// или require('./config/viewEngine.js')(app);

app.use(express.static('src/public'));//проверяваме дали работи в browser http://localhost:5000/css/site.css
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));//връща middleware,който ни парсва urlcoded bodies 
//прочита данните от req и ще ги парсва за всеки req;
app.use(authMiddleware.authentication);//след  cookieParser()) и express.urlencoded( и преди routes;Всички req минават от тук
app.use(routes);//за всички заявки използвай този router
app.use(errorHandler);

initDataBase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`)))
    //ако не работи базата данни да не се стартира приложението
    .catch((err) => console.error(err.message));

