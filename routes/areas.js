const express = require('express');
const router = express.Router();
const { Sequelize, Op } = require('sequelize');
const { Area } = require('../models');

// Ruta para listar todos los clientes
router.get('/', async (req, res) => {
  try {
    const areas = await Area.findAll({
      where: {
        active: true
      }
    });
    res.render('areas', { title: 'Listar áreas activas', areas });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;