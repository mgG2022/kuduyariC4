//para usar express en la ruta
const express = require('express');
// todas la rutas van acá
const router = express.Router();
//llamar al controlador
const historiaController = require('../controllers/HistoriaController.js');

//Asignar las rutas CRUD
//llamamos a router, busque después del /
router.get('/', historiaController.mostrarHistorias);
router.post('/', historiaController.agregarHistorias);
//mostrar un cliente por id 
router.get('/:id', historiaController.mostrarHistoria);
//eliminar
router.delete('/:id', historiaController.eliminarHistoria);
//Actualizar
router.put('/:id', historiaController.actualizarHistoria);


//cuando use router significa que me voy a traer las rutas
module.exports = router;