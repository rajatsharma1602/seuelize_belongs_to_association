// Use this file to create config.conf.js. config.conf.js contains any configuration that could differe from environment to environment
// Configuration should be mentioned in such a way that there is no need of checking environment in code
// All configs should be available through out the app using config.[configOf]
var sequelizeConfig = require('./sequelize.conf');

var config = {};
config.env = 'development';


//======================================== Environment Specific config
switch (config.env) {
    case 'development':
        config.sequelize = sequelizeConfig.development;
        config.host = "localhost";
        config.port = 3000;
        break;
}
//======================================== /Environment Specific config

module.exports = config;