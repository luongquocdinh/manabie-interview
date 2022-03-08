'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING},
    role: {type: DataTypes.ENUM('admin','manager','user')},
    created_at: {type: DataTypes.NOW},
    updated_at: {type: DataTypes.NOW},
  },{
    timestamps: false
  });

  return Users;
};