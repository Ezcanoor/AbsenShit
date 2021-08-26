'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Attendances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentsId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Students',
          key : 'id'
        }
      },
      courseId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Courses',
          key : 'id'
        }
      },
      time: {
        type: Sequelize.TIME
      },
      date: {
        type: Sequelize.DATE
      },
      formteacherId: {
        type: Sequelize.INTEGER,
        references: {
          model:'FormTeachers',
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Attendances');
  }
};