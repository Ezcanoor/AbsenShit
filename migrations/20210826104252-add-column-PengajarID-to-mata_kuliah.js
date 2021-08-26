'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Mata_Kuliahs',
      'PengajarID',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dosens',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Mata_Kuliahs','PengajarID', {})
  }
};
