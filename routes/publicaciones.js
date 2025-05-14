const express = require('express');
const router = express.Router();
const publicacionesController = require('../controllers/publicacionController')

// api/publicaciones
router.post('/', publicacionesController.crearPublicacion);
router.get('/filtrar', publicacionesController.obtenerPublicacionesPorTrabajoYUbi);
router.get('/inactivas', publicacionesController.obtenerPublicacionesInactivas);
router.get('/activas', publicacionesController.obtenerPublicacionesActivas);
router.get('/inactiva/una', publicacionesController.obtenerUnaPublicacionInactiva);
router.get('/inactivas/count', publicacionesController.contarPublicacionesInactivas);
router.get('/:userId', publicacionesController.obtenerPublicacionesPorUsuario);
router.get('/publicacion/:id', publicacionesController.obtenerPublicacion);
router.put('/:id', publicacionesController.actualizarPublicacion);
router.delete('/:id', publicacionesController.eliminarPublicacion);


module.exports = router