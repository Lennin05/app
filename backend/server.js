const express = require('express');
const mongoose = require('mongoose');
const estudianteRoutes = require('./routes/estudianteRoutes');
const asistenciaRoutes = require('./routes/asistenciaRoutes');
require('./db'); // Conexión a la base de datos

const app = express();
app.use(express.json());

app.use('/api', estudianteRoutes);
app.use('/api', asistenciaRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
