'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dosen.belongsTo(models.Mata_Kuliah, {
        foreignKey: 'PengajarID'
      })
    }
  };
  Dosen.init({
    nama: DataTypes.STRING,
    Tanggal_Lahir: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dosen',
  });
  return Dosen;
};