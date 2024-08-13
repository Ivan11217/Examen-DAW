'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Areas', [
      {
        nombre: 'básica',
        estado: true, // activo
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'profesionalizante',
        estado: true, // activo
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'titulación',
        estado: false, // inactivo
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Areas', null, {});
  }
};
