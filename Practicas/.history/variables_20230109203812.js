let Nombre = "Alexis";
let Apellido = "Quiceno";
let usuario = "Alexis124";
let Edad = 21;
let password = "alexisquiseno123@gmail.com";
let isMayor = true;
let DineroAhorrado = 400000;
let Deudas = 200000;

var NameCompleto = Nombre + " " + Apellido;

console.log(NameCompleto);

const name2 = "Juan David";
const lastname = "Castro Gallego";
const completeName = name2 + lastname;
const nickname = "juandc";
function NombreCompleto(name2, lastname) {
  return name2 + " " + lastname;
}
console.log(NombreCompleto(name2, lastname));

function saludo(name2, lastname, nickname) {
  const completeName = NombreCompleto(name2, lastname);
}
console.log(
  "Mi nombre es:" +
    " " +
    completeName +
    "pero prefiero que me digas" +
    nickname +
    "."
);

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}
if (tipoDeSuscripcion === "Free") {
  console.log("solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "basic") {
  console.log("solo puedes tomar los cursos gratis");
}

function validar() {
  let resultado = prompt("Escribe el resultado de sumar 2 + 2");
  if (resultado === 4) {
    alert("Felicitaciones el resultado es correcto");
  } else {
    alert("Intentalo nuevamente");
    validar();
  }
}

const semana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
function imprimir(array) {
  console.log(array[0]);
}
imprimir(semana);
const planeta = {
    nombre: 'Jupiter',
    radio: 71492,
    diametro: 142984 
}

function imprimir(objeto){
    for(let elemento in objeto){
        console.log(objeto[elemento]);
    }
}

imprimir(planeta)

class Personaje {
    name;                 // Propiedad sin definir (undefined)
    type = "Player";      // Propiedad definida
    lifes = 5;            // Propiedad definida con 5 vidas restantes
    energy = 10;          // Propiedad definida con 10 puntos de energía
  
    constructor(name) {
      this.name = name;   // Modificamos el valor de la propiedad name
      console.log(`¡Bienvenido/a, ${this.name}!`);  // Accedemos al valor actual de la propiedad name
    }
  }
  
  const mario = new Personaje("Mario");   // '¡Bienvenido/a, Mario!'

  // curso de youtube 

  

  alert(`hello`)
  var recipiente="papel";
  alert)
