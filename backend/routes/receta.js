const express = require ('express');
const router = express.Router();
const recetacontroller = require('../controllers/recetacontroller');

//asignamos las rutas crud

router.get('/',recetacontroller.mostrarreceta);
router.post('/',recetacontroller.agregarReceta);
router.get('/:id',recetacontroller.mostrarRecetas);
router.delete('/:id',recetacontroller.eliminarRecetas);
router.put('/:id',recetacontroller.actualizarReceta);

module.exports = router;