
// Variables para controlar el juego
let tarjetasDestapadas = 0; // Contador de tarjetas destapadas
let tarjeta1 = null; // Primera tarjeta destapada
let tarjeta2 = null; // Segunda tarjeta destapada
let primerResultado = null; // Resultado de la primera tarjeta
let segundoResultado = null; // Resultado de la segunda tarjeta
let movimientos = 0; // Contador de movimientos realizados
let aciertos = 0; // Contador de aciertos
/* La variable "null" se utiliza para indicar que una variable no tiene ningún valor asignado. En este caso, 
se utiliza para inicializar las variables "tarjeta1" y "tarjeta2" con un valor nulo, ya que al principio del juego no hay ninguna tarjeta destapada.*/

// Elementos para mostrar información
let mostrarMovimientos = document.getElementById('movimientos'); // Elemento para mostrar el número de movimientos
let mostrarAciertos = document.getElementById('aciertos'); // Elemento para mostrar el número de aciertos

// Generar un array con los números del 1 al 8 (cada número dos veces para tener pares)
var numeros = [];
var imagenesCartas = [];

for (var i = 1; i <= 8; i++) {
  var imagen = new Image();
  imagen.src = "carta" + i + ".jpg";
  imagenesCartas.push(imagen);
  numeros.push(i);
  numeros.push(i);
}

// Desordenar los números utilizando el método sort() con una función de comparación aleatoria
numeros.sort(function() {
  return Math.random() - 0.5;
});
/* // El valor -0.5 se utiliza en la función de comparación aleatoria del método sort() para desordenar los números. 
Al restar 0.5, se genera un número aleatorio negativo o positivo, lo que ayuda a desordenar los elementos de forma más aleatoria.
sin el -0.5 se ordena a pares
*/

// Imprimir los números desordenados
for (var i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}


function destapar(id) {
  tarjetasDestapadas++;

  if (tarjetasDestapadas === 1) {
    tarjeta1 = document.getElementById(id);
    // saca html
    primerResultado = numeros[id];
    // saca de numeros destapar
  
    tarjeta1.innerHTML = primerResultado;
    tarjeta1.innerHTML = "<img src='carta" + primerResultado + ".jpg' alt='Carta " + primerResultado + "'>";
    tarjeta1.disabled = true;
    // La línea "tarjeta1.disabled = true;" desactiva la tarjeta 1, lo que significa que el usuario no puede hacer clic en ella nuevamente.

  } else if (tarjetasDestapadas === 2) {
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    
    tarjeta2.innerHTML = segundoResultado;
    tarjeta2.innerHTML = "<img src='carta" + segundoResultado + ".jpg' alt='Carta " + segundoResultado + "'>";
    tarjeta2.disabled = true;
// La línea "tarjeta2.disabled = true;" desactiva la tarjeta 2, al igual que se hizo con la tarjeta 1.
      movimientos++;
    document.getElementById('movimientos').innerHTML = movimientos; // Actualiza el movimiento en el HTML
   
    if (primerResultado === segundoResultado) {
      tarjetasDestapadas = 0;
      aciertos++;
      document.getElementById('aciertos').innerHTML = aciertos; // Actualiza el acierto en el HTML
      if (aciertos  === 8) {
        document.getElementById('aciertos').innerHTML = aciertos; // Actualiza el acierto en el HTML
        document.getElementById('movimientos').innerHTML = movimientos; // Actualiza el movimiento en el HTML
        alert('Te moviste: ' + movimientos + ' veces y acertaste ' + aciertos + ' veces. ¡Ganaste!');
        location.reload(); // Recargar la página
      } else if (movimientos > 20) {
        document.getElementById('aciertos').innerHTML = aciertos; // Actualiza el acierto en el HTML
        document.getElementById('movimientos').innerHTML = movimientos; // Actualiza el movimiento en el HTML
        alert('Te moviste: ' + movimientos + ' veces, te pasaste del límite y acertaste ' + aciertos + ' veces. ¡Suerte la próxima!');
        location.reload(); // Recargar la página
      }
    } else {
      setTimeout(function() {
        tarjeta1.innerHTML = "";
        tarjeta2.innerHTML = "";
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 1000);
    } 
  }  
}
/// formulario emali
$(document).ready(function() {
  $('#btn-enviar').click(function(e) {
    e.preventDefault();
    validarFormulario();
  });
});

function validarFormulario() {
  const nombre = $('#nombre').val();
  const apellido = $('#apellido').val();
  const email = $('#email').val();

  if (nombre === "") {
    alert("Por favor ' + usario + ', ingresa tu nombre de usuario.");
    return;
  }

  if (apellido === "") {
    alert("Por favor, ingresa tu apellido.");
    return;
  }

  if (email === "") {
    alert("Por favor, ingresa tu correo electrónico.");
    return;
  }

  if (!validarEmail(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  // Aquí puedes realizar acciones adicionales, como enviar el formulario al servidor
  alert("Formulario enviado correctamente!");
}


function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
$(document).ready(function(){
  $('#tiempo').click(function(){
    window.location.href = 'tiempo.html';
  });
});
$(document).ready(function(){
$('#imagenes').click(function(){
  window.location.href = 'romanticismo.html';
  });
});

$(document).ready(function(){
  $('#juego').click(function(){
    window.location.href = 'juego/memoria.html';
  });
});
