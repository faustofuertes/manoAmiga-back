const express = require('express');
const router = express.Router();
const publicacionesController = require('../controllers/publicacionController')

// api/publicaciones
router.post('/', publicacionesController.crearPublicacion);
router.get('/filtrar', publicacionesController.obtenerPublicacionesPorTrabajoYUbi);
router.get('/:userId', publicacionesController.obtenerPublicacionesPorUsuario);
router.get('/publicacion/:id', publicacionesController.obtenerPublicacion);

module.exports = router