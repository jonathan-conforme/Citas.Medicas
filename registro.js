// JavaScript personalizado (script.js)

document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Obtener valores del formulario de registro de citas médicas
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const cedula = document.getElementById('cedula').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const area = document.getElementById('area').value;
  
    // Validar cédula
    if (!validarCedula(cedula)) {
      alert('El número de cédula no es válido.');
      return;
    }
  
    // Almacenar datos en localStorage
    const nuevaCita = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      fecha: fecha,
      hora: hora,
      area: area
    };
  
    // Obtener citas existentes o inicializar un array vacío si no hay
    let citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
    citasGuardadas.push(nuevaCita);
    localStorage.setItem('citas', JSON.stringify(citasGuardadas));
  
    // Mostrar mensaje de registro exitoso
    alert(`¡Registro de cita médica exitoso!\nNombre: ${nombre} ${apellido}\nCédula: ${cedula}\nFecha: ${fecha}\nHora: ${hora}\nÁrea: ${area}`);
  
    // Limpieza del formulario (opcional)
    document.getElementById('formRegistro').reset();
  });
  
  // Función para validar la cédula
  function validarCedula(cedula) {
    // Implementa la lógica de validación de cédula aquí
    // Por ejemplo, una validación simple para 10 dígitos
    return /^\d{10}$/.test(cedula);
  }
  