const Estudiante = require('../models/estudianteModel');

// Crear estudiante
exports.crearEstudiante = async (req, res) => {
  const estudiante = new Estudiante(req.body);
  try {
    await estudiante.save();
    res.status(201).send(estudiante);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obtener todos los estudiantes
exports.obtenerEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.status(200).json(estudiantes);
  } catch (error) {
    res.status(500).send(error);
  }
};
