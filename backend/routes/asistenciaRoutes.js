const express = require('express');
const asistenciaController = require('../controllers/asistenciaController');
const router = express.Router();

router.post('/asistencia', asistenciaController.marcarAsistencia);
router.get('/asistencia/:estudianteId', asistenciaController.obtenerAsistencia);

module.exports = router;
