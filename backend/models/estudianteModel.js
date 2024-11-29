const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  materias: {
    lengua: { type: Number, required: true },
    matematicas: { type: Number, required: true },
    cienciasSociales: { type: Number, required: true },
    cienciasNaturales: { type: Number, required: true },
  },
  asistencia: [{ date: Date, presente: Boolean }]
});

estudianteSchema.methods.calcularLiteral = function() {
  const promedio = (this.materias.lengua + this.materias.matematicas + this.materias.cienciasSociales + this.materias.cienciasNaturales) / 4;
  if (promedio >= 90) return 'A';
  if (promedio >= 80) return 'B';
  if (promedio >= 70) return 'C';
  return 'F';
};

module.exports = mongoose.model('Estudiante', estudianteSchema);
