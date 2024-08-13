'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      // Una Materia pertenece a un Area
      Materia.belongsTo(models.Area, {
        foreignKey: 'id_area',
        as: 'area'
      });
    }
  }
  Materia.init({
    nombre: DataTypes.STRING,
    creditos: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    id_area: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materia',
  });
  return Materia;
};
