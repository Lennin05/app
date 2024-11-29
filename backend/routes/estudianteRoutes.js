const express = require('express');
const estudianteController = require('../controllers/estudianteController');
const router = express.Router();

router.post('/estudiantes', estudianteController.crearEstudiante);
router.get('/estudiantes', estudianteController.obtenerEstudiantes);

module.exports = router;
