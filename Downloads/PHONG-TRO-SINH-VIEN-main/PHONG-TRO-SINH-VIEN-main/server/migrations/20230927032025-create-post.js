'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING
      },
      star: {
        type: Sequelize.FLOAT
      },
      address: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      expiredDate: {
        type: Sequelize.DATE,
      },
      postedBy: {
        type: Sequelize.INTEGER
      },
      target: {
        type: Sequelize.ENUM(['Nam', 'Nữ', 'Tất cả']),
        defaultValue: 'Tất cả'
      },
      images: {
        type: Sequelize.TEXT
      },
      area: {
        type: Sequelize.FLOAT
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};