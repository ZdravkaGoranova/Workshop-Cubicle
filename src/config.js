const config = {
    production: {
        PORT: 1234,
    },
    development: {
        PORT: 5000,
    }
};
module.exports = config[process.env.node_env || 'development'];//искам да експоернтна определена част, която отговаря на текущата process.env  променлива 
//ако не е сетната използвай development
//според средата на изпълнение