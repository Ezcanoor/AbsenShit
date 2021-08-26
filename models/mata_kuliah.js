'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mata_Kuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mata_Kuliah.init({
    nama: DataTypes.STRING,
    hari: DataTypes.STRING,
    jam: DataTypes.STRING,
    pengajarID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mata_Kuliah',
  });
  return Mata_Kuliah;
};