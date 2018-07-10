var express = require('express');
var path = require('path');
var config = require('./config/global.conf');
var models = require('./models');

global.backendHomeDir = path.resolve(__dirname, './');

var app = express();

// const userData = {
//   userName: 'rajat',
//   firstName: 'rajat',
//   lastName: 'Sharma',
//   project: {
//     name: 'rajat_1'
//   }
// };
// const newData = {
//   userName: 'rajat_s',
//   firstName: 'rajat',
//   lastName: 'Sharma',
//   project: {
//     name: 'rajat_s'
//   }
// };

async function insertDB() {
  try{
    const user = await models.User.create(userData, {
      include: [
        { association: models.User.project }
      ]
    });
    console.log(user);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
}
async function updateDB() {
  const newData = {
    userName: 'rajat_s',
    firstName: 'raj',
    lastName: 'Sharma',
    project: {
      name: 'rajat'
    }
  };
  try{
    const user = await models.User.update(newData, {
      where: {
        id: 2
      },
      include: [
        {
          model: models.Project,
          association: models.User.project
        }
      ]
    });
    console.log(user);
    } catch (err) {
      console.log(err);
      // throw new Error(err);
    }
}

updateDB();


module.exports = app;
