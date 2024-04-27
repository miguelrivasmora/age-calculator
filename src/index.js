function calcularEdadExacta() {
  // Obtener las fechas introducidas por el usuario
  const fechaUsuarioDia = parseInt(document.getElementById("diaUsuario").value);
  const fechaUsuarioMes = parseInt(document.getElementById("mesUsuario").value);
  const fechaUsuarioAño = parseInt(document.getElementById("añoUsuario").value);

  // Obtener la fecha actual
  const fechaActual = new Date();
  const diaActual = fechaActual.getDate();
  const mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
  const añoActual = fechaActual.getFullYear();

  // Calcular la diferencia de años
  let años = añoActual - fechaUsuarioAño;

  // Calcular la diferencia de meses
  let meses = mesActual - fechaUsuarioMes;

  // Ajustar la diferencia de meses si es necesario
  if (meses < 0) {
    años--;
    meses += 12;
  }

  // Calcular la diferencia de días
  let dias = diaActual - fechaUsuarioDia;

  // Ajustar la diferencia de días si es necesario
  if (dias < 0) {
    if (meses === 0) {
      años--;
    } else {
      meses--;
      dias += 30;
    }
  }

  // Mostrar la edad exacta
  dayresult.textContent = dias;
  monthresult.textContent = meses;
  yearresult.textContent = años;
}
