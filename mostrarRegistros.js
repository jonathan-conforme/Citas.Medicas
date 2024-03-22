// JavaScript para mostrar registros almacenados temporalmente

document.getElementById('verRegistrosBtn').addEventListener('click', function() {
  // Obtener registros de localStorage
  const registros = JSON.parse(localStorage.getItem('citas')) || [];

  // Crear el contenido de la tabla
  let tablaHTML = '<table class="table"><thead><tr><th>Nombre</th><th>Apellido</th><th>Cédula</th><th>Fecha</th><th>Hora</th><th>Área</th><th>Acciones</th></tr></thead><tbody>';
  registros.forEach((registro, index) => {
    tablaHTML += `
      <tr id="fila-${index}">
        <td>${registro.nombre}</td>
        <td>${registro.apellido}</td>
        <td>${registro.cedula}</td>
        <td>${registro.fecha}</td>
        <td>${registro.hora}</td>
        <td>${registro.area}</td>
        <td>
          <button class="btn btn-danger btn-sm eliminar-btn" data-index="${index}">Eliminar</button>
          <button class="btn btn-primary btn-sm editar-btn" data-index="${index}">Editar</button>
        </td>
      </tr>
    `;
  });
  tablaHTML += '</tbody></table>';

  // Mostrar la tabla en el contenedor
  document.getElementById('registrosContainer').innerHTML = tablaHTML;

  // Agregar event listener para los botones de eliminar
  document.querySelectorAll('.eliminar-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      eliminarRegistro(index);
    });
  });

  // Agregar event listener para los botones de editar
  document.querySelectorAll('.editar-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const index = this.getAttribute('data-index');
      editarRegistro(index);
    });
  });
});

// Función para eliminar un registro del localStorage
function eliminarRegistro(index) {
  let registros = JSON.parse(localStorage.getItem('citas')) || [];
  registros.splice(index, 1); // Eliminar el registro en el índice especificado
  localStorage.setItem('citas', JSON.stringify(registros)); // Actualizar los registros en localStorage
  alert('Registro eliminado exitosamente');
  location.reload(); // Recargar la página para reflejar los cambios
}

// Función para editar un registro
function editarRegistro(index) {
// Función para editar un registro
function editarRegistro(index) {
  // Obtener registros de localStorage
  let registros = JSON.parse(localStorage.getItem('citas')) || [];
  const registroEditar = registros[index];

  // Mostrar un formulario con los valores actuales del registro
  const formularioEditar = `
    <form id="formularioEditar">
      <label for="nombreEditar">Nombre:</label>
      <input type="text" id="nombreEditar" value="${registroEditar.nombre}" required><br>
      <label for="apellidoEditar">Apellido:</label>
      <input type="text" id="apellidoEditar" value="${registroEditar.apellido}" required><br>
      <label for="cedulaEditar">Cédula:</label>
      <input type="text" id="cedulaEditar" value="${registroEditar.cedula}" required><br>
      <label for="fechaEditar">Fecha:</label>
      <input type="date" id="fechaEditar" value="${registroEditar.fecha}" required><br>
      <label for="horaEditar">Hora:</label>
      <input type="time" id="horaEditar" value="${registroEditar.hora}" required><br>
      <label for="areaEditar">Área:</label>
      <input type="text" id="areaEditar" value="${registroEditar.area}" required><br>
      <button type="submit">Guardar cambios</button>
    </form>
  `;

  // Mostrar el formulario en un modal o en la página
  document.getElementById('formularioEditarContainer').innerHTML = formularioEditar;

  // Agregar event listener para el formulario de edición
  document.getElementById('formularioEditar').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Obtener nuevos valores del formulario
    const nombreEditar = document.getElementById('nombreEditar').value;
    const apellidoEditar = document.getElementById('apellidoEditar').value;
    const cedulaEditar = document.getElementById('cedulaEditar').value;
    const fechaEditar = document.getElementById('fechaEditar').value;
    const horaEditar = document.getElementById('horaEditar').value;
    const areaEditar = document.getElementById('areaEditar').value;

    // Actualizar el registro con los nuevos valores
    registros[index] = {
      nombre: nombreEditar,
      apellido: apellidoEditar,
      cedula: cedulaEditar,
      fecha: fechaEditar,
      hora: horaEditar,
      area: areaEditar
    };

    // Guardar los registros actualizados en el localStorage
    localStorage.setItem('citas', JSON.stringify(registros));

    // Mostrar un mensaje de éxito
    alert('Registro editado exitosamente');
    
    // Limpiar el contenedor del formulario de edición
    document.getElementById('formularioEditarContainer').innerHTML = '';

    // Mostrar los registros actualizados
    mostrarRegistros();
  });
}

  alert(`Editar registro en el índice ${index}`);
}
