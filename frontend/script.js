document.getElementById('formEstudiante').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const estudiante = {
      nombre: document.getElementById('nombre').value,
      materias: {
        lengua: parseInt(document.getElementById('lengua').value),
        matematicas: parseInt(document.getElementById('matematicas').value),
        cienciasSociales: parseInt(document.getElementById('cienciasSociales').value),
        cienciasNaturales: parseInt(document.getElementById('cienciasNaturales').value),
      }
    };
  
    const response = await fetch('http://localhost:3000/api/estudiantes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(estudiante)
    });
  
    const data = await response.json();
    alert('Estudiante registrado');
    cargarEstudiantes();
  });
  
  async function cargarEstudiantes() {
    const response = await fetch('http://localhost:3000/api/estudiantes');
    const estudiantes = await response.json();
    const listaEstudiantes = document.getElementById('listaEstudiantes');
    listaEstudiantes.innerHTML = '';
  
    estudiantes.forEach(estudiante => {
      const li = document.createElement('li');
      li.textContent = `${estudiante.nombre} - Literal: ${estudiante.calcularLiteral()}`;
      listaEstudiantes.appendChild(li);
    });
  }
  
  cargarEstudiantes();
  