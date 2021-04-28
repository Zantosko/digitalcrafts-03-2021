'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Zach',
      lastName: 'Antosko',
      email: 'zachantosko@aol.com',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
