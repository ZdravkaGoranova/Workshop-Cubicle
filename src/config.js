const config = {
    production: {
        PORT: 1234,
    },
    development: {
        PORT: 5000,
    }
};
module.exports = config[process.env.node_env || 'development'];
//process.env.node_env.trim() и в package.json  "start": " SET node_env=production &&node ./src/index.js",
//искам да експоернтна определена част, която отговаря на текущата process.env  променлива 
//ако не е сетната използвай development
//според средата на изпълнение