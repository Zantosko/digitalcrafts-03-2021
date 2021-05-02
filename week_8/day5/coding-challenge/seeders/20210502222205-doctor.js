'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Doctors', [{
      Name: 'Annie Easley',
      Email: 'ajeasley@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Doctors', null, {});
  }
};
