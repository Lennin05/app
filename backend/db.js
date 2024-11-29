const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/estudiantes_lennin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error(err));
