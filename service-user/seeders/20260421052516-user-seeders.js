'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
        {
          name: 'budi',
          professions: 'Admin',
          role: 'admin',
          email: 'budi@gmail.com',
          password: await bcrypt.hash('password123', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'dimas',
          professions: 'student',
          avatar: 'https://example.com/avatar2.jpg',
          role: 'student',
          email: 'dimas@gmail.com',
          password: await bcrypt.hash('password123', 10),
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
      );
  
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});
  },
};
