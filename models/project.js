"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "project",
    { name: { type: DataTypes.STRING, allowNull: false } },
    { paranoid: true }
  );

  return Project;
};
