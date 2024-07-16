'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
      {
       email: 'John Doe1',
       password: '',
       username: '1'
      },
      {
        email: 'John Doe2',
        password: '',
        username: '2'
      },
      {
        email: 'John Doe3',
        password: '',
        username: '3'
      },
    ], 
  {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
