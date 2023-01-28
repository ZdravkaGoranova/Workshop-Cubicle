const config = {
    production: {
        PORT: 1234,
        DB_URI: 'mongodb://127.0.0.1:27017/cubicle'// база данни
    },
    development: {
        PORT: 5000,
        DB_URI: 'mongodb://127.0.0.1:27017/cubicle'// база данни
    }
};
module.exports = config[process.env.node_env || 'development'];
//process.env.node_env.trim() и в package.json  "start": " SET node_env=production&&node ./src/index.js",
//искам да експоернтна определена част, която отговаря на текущата process.env  променлива
//ако не е сетната използвай development
//според средата на изпълнение