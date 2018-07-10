"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var config = require("../config/global.conf");

var models = {};
var basename = path.basename(__filename);

var sequelize = new Sequelize(config.sequelize.database, config.sequelize.username, config.sequelize.password, config.sequelize);

fs.
  readdirSync(__dirname).
  filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')).
  forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file));
    models[capitalizeFirstLetter(model.name)] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].hasOwnProperty('associate')) {
    models[modelName].associate(models);
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
