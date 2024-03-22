// JavaScript personalizado (script.js)

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Aquí puedes agregar la lógica para autenticar al usuario
    // Compararemos con una clave de ejemplo 'clave'
    if (username === 'admin' && password === 'admin') {
      // Si las credenciales son correctas, redirigir al usuario a la página de registro de citas médicas
      window.location.href = 'index.html'; // Cambiar 'registro.html' al nombre de tu archivo de registro
    } else if (username === 'usuario' && password === 'usuario') {
      window.location.href = 'registro.html'; // Redirigir a la página de usuario normal
}    
    else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  
    // Limpieza del formulario (opcional)
    document.getElementById('loginForm').reset();
  });
  // JavaScript personalizado (script.js)

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Obtener valores del formulario de registro de citas médicas
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const cedula = document.getElementById('cedula').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const area = document.getElementById('area').value;
  
    // Aquí puedes agregar la lógica para guardar la cita médica en la base de datos
    alert(`¡Registro de cita médica exitoso!\nNombre: ${nombre} ${apellido}\nCédula: ${cedula}\nFecha: ${fecha}\nHora: ${hora}\nÁrea: ${area}`);
  
    // Limpieza del formulario (opcional)
    document.getElementById('registroForm').reset();
  });
  