'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Subjects',
      'lecturerId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lecturers',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Subjects','lecturerId',{})
  }
};
