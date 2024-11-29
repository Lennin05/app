const mongoose = require('mongoose');

const asistenciaSchema = new mongoose.Schema({
  estudianteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante', required: true },
  date: { type: Date, required: true },
  presente: { type: Boolean, required: true }
});

module.exports = mongoose.model('Asistencia', asistenciaSchema);
