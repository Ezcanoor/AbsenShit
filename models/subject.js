'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subject.belongsTo(models.Lecturer, {
        foreignKey: 'lecturerId'
      })
      Subject.belongsToMany(models.Student, {through:'StudentSubject', foreignKey: 'subjectId'})
    }
  };
  Subject.init({
    name: {
      type:DataTypes.STRING, 
      validate: {
        notEmpty: {
          msg: 'PLEASE INSERT SUBJECT NAME'
        }
      }
    },
    day: {
      type:DataTypes.STRING, 
      validate: {
        notEmpty: {
          msg: 'PLEASE INSERT DAY'
        }
      }
    },
    time: {
      type:DataTypes.STRING, 
      validate: {
        notEmpty: {
          msg: 'PLEASE INSERT TIME'
        }
      }
    },
    lecturerId: {
      type:DataTypes.INTEGER, 
      validate: {
        notEmpty: {
          msg: 'PLEASE INSERT TIME'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};