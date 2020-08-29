const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController')
const calculoController = require('./controllers/calculoController')

/* Rotas de inicio */
router.get('/', homeController.inicio)


/*Rotas de Calculo*/
router.post('/calculo', calculoController.calculo)


module.exports = router;