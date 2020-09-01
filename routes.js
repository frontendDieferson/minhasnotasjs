const express = require('express');
const router = express.Router();
const homeController = require('./src/controllers/homeController')
const calculoController = require('./src/controllers/calculoController')

/* Rotas de inicio */
router.get('/', homeController.inicio)


/*Rotas de Calculo*/
router.post('/calculo', calculoController.calculo)


module.exports = router;