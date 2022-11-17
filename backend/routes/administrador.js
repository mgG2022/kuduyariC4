//para usar express en la ruta
const express = require('express');
// todas la rutas van acá
const router = express.Router();
//llamar al controlador
const administradorController = require('../controllers/AdministradorController.js');

//Asignar las rutas CRUD
//llamamos a router, busque después del /
router.get('/', administradorController.mostrarAdministradores);
router.post('/', administradorController.agregarAdministradores);
//mostrar un cliente por id 
router.get('/:id', administradorController.mostrarAdministrador);
//eliminar
router.delete('/:id', administradorController.eliminarAdministrador);
//Actualizar
router.put('/:id', administradorController.actualizarAdministrador);


//cuando use router significa que me voy a traer las rutas
module.exports = router;