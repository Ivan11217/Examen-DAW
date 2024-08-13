const express = require('express');
const router = express.Router();
const { Materia, Area } = require('../models');

// Vista para crear materias
router.get('/crear', async (req, res) => {
  try {
    const areas = await Area.findAll();
    res.render('crear_materia', { areas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las áreas');
  }
});

// Vista para listar materias
router.get('/', async (req, res) => {
  try {
    const materias = await Materia.findAll({
      include: [
        {
          model: Area,
          as: 'area'
        }
      ]
    });
    res.render('listar_materias', { materias });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las materias');
  }
});

module.exports = router;
