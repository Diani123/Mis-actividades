// while
let numero = 0;

// while (numeroParaSumar < 10) {
//   numeroParaSumar++;
//   document.write(numeroParaSumar);
// }

// ejecuta primero el valor inicial de let que es cero
// do {

//   document.write("prueba " + numero);
//   numeroParaSumar++;
// } while (numeroParaSumar < 10);

while (numero < 1000) {
  numero++;
  document.write(numero);
  if (numero == 10) {
    break;
  }
}
document.write("fin");

// El for se compone de 3 cosas : declaracion de una variable,condicion e iteraciòn
// usando continue podemos omitir el numero que queremos

for (let i = 0; i < 20; i++) {
  if (i == 12) {
    continue;
  }
  document.write(i + "<br>");
};

// in devuelve la posicion de cada elemento

let animales=["perro","gato","gallina"]
for (animal in animales){
document.write(animales{animal + "<br>")
}
// of devuelve el nombre de cada elemento del arreglo
for(animal of animales){
    document.write(animal + "<br>")
}
