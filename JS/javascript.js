let inicio = 1;
let fin = 5;
let intentos = 0;
const numerosIngresados = [];

const numeroAleatorio = String(Math.floor(Math.random() * fin) + inicio);

console.log(numeroAleatorio);

function solicitarNumero() {
  return prompt("ingresa un numero entre 1 y 5:");
}
while (true) {
  // solicitud
  const numeroUsuario = solicitarNumero();

  //suma de intentos
  intentos++;

  // Array
  numerosIngresados.push(numeroUsuario);

  // Verificacion
  if (numeroUsuario === numeroAleatorio) {
    alert(`Muy Bien! Adivinaste el número en ${intentos} intentos!!`);
    alert(`Los números que intentaste fueron: ${numerosIngresados.join(", ")}`);
    break; //termina bucle
  } else if (numeroUsuario < numeroAleatorio) {
    alert("El numero es muy bajo, intente de nuevo");
  } else {
    alert("El numero es muy alto, intente de nuevo");
  }
}
