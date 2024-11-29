const Asistencia = require('../models/asistenciaModel');
const Estudiante = require('../models/estudianteModel');

// Marcar asistencia
exports.marcarAsistencia = async (req, res) => {
  const { estudianteId, presente } = req.body;
  const asistencia = new Asistencia({ estudianteId, date: new Date(), presente });
  try {
    await asistencia.save();
    res.status(201).send(asistencia);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Obtener historial de asistencia
exports.obtenerAsistencia = async (req, res) => {
  const { estudianteId } = req.params;
  try {
    const asistencia = await Asistencia.find({ estudianteId }).sort({ date: -1 });
    res.status(200).json(asistencia);
  } catch (error) {
    res.status(500).send(error);
  }
};
