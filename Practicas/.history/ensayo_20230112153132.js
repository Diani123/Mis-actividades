let pinpongHoras = prompt("cantidad de horas completadas en pin pong:");
let monitoriaHoras = prompt("cantidad de horas completadas en monitorias :");
let gymHoras = prompt("cantidad de horas completadas Gym:");
let resultados=(parseint(pinpongHoras)+parseInt(monitoriaHoras)+parseInt(gymHoras))
let totalHoras = parseInt(pinpongHoras + monitoriaHoras + gymHoras);
document.write("<b>" + totalHoras);
