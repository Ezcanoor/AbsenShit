'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lecturer.hasMany(models.Subject, {
        foreignKey: 'lecturerId'
      })
    }
  };
  Lecturer.init({
    name: {
      type:DataTypes.STRING, 
      validate: {
        notEmpty: {
          msg: 'PLEASE INSERT NAME'
        }
      }
    },
    birthDate: {
      type:DataTypes.DATE, 
      validate: {
        notEmpty: {
          msg: 'PLEASE INSERT BIRTH DATE'
        }
      }
    },
    email: {
      type:DataTypes.STRING, 
      validate: {
        notEmpty: {
          msg: 'PLEASE INSERT EMAIL'
        }
      }
    },
    gender: {
      type:DataTypes.STRING, 
      validate: {
        notEmpty: {
          msg: 'PLEASE CHOOSE GENDER'
        }
      }
    },
  }, {
    hooks: {
    beforeCreate: (data, options) => {
      let count = 0
      for (let index = 0; index < data.email.length; index++) {
        if (data.email[index] === '@'){
          count++
        } 
      }
      if (!count){
        data.email+='@hactiv8.com'
      }
    }, 
    beforeUpdate: (data,options) => {
      let count = 0
      for (let index = 0; index < data.email.length; index++) {
        if (data.email[index] === '@'){
          count++
        } 
      }
      if (!count){
        data.email+='@hactiv8.com'
      }
    }
    },
    sequelize,
    modelName: 'Lecturer',
  });
  return Lecturer;
};