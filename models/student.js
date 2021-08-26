'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    major: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });

  Student.addHook('beforeCreate', (student, options) => {
    let name = student.name
    name = name.toLowerCase()
    name = name.split(' ')
    name = name.map(el => {
     return name = `${el[0].toUpperCase()}${el.slice(1)}`

    })
    student.name = name.join(' ')
  })

  Student.addHook('beforeCreate', (student, options) => {
    let major = student.major
    major = major.toLowerCase()
    major = major.split(' ')
    major = major.map(el => {
     return major = `${el[0].toUpperCase()}${el.slice(1)}`

    })
    student.major = major.join(' ')
  })
  
  return Student;
};