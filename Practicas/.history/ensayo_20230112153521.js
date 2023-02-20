 var=pinpongHoras,monitoriaHoras,gymHoras,total
 pinpongHoras = prompt("cantidad de horas completadas en pin pong:");
 monitoriaHoras = prompt("cantidad de horas completadas en monitorias :");
 gymHoras = prompt("cantidad de horas completadas Gym:");
 totalHoras=(parseint(pinpongHoras)+parseInt(monitoriaHoras)+parseInt(gymHoras));
document.write( totalHoras);
