'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      this.hasMany(models.Item, {foreignKey: "authorId"})
    }
  }
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    username:{
      type:  DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {msg: "username is required"},
        notNull: {msg: "username is required"},
      }
    },
    email: {
      type:  DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "email must be unique"
      },
      validate:{
        notEmpty: {msg: "email is required"},
        notNull: {msg: "email is required"},
        isEmail: {
          args: true,
          msg: "invalid email format"
        }
      }
    },
    password: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: {msg: "password is required"},
        notNull: {msg: "password is required"},
        len: {
          args: [5],
          msg: "minimum password 5 character"
        }
      }
    },
    role: {
      type:  DataTypes.STRING,
      defaultValue: "user"
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user)=>{
    user.password = hashPassword(user.password)
  })
  return User;
};