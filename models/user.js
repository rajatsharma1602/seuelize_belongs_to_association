"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      userName: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING }
    },
    { paranoid: true }
  );

  User.associate = models => {
    User.project = User.belongsTo(models.Project, {
      foreignKey: "projectId",
      allowNull: false,
      unique: false
    });
  };
  return User;
};
