'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormTeacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FormTeacher.init({
    name: DataTypes.STRING,
    degree: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isLogin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'FormTeacher',
  });
  return FormTeacher;
};