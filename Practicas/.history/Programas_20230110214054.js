let dineroCofla = prompt("¿Cuànto dinero tienes cofla");
let dineroRobert = prompt("¿Cuànto dinero tienes Roberto");
let dineroPedro = prompt("¿Cuànto dinero tienes Pedro");

if (dineroCofla >= 0.6 && dineroCofla < 1) {
  alert("comprate el helado de agua");
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  alert("comprate el palito de helado de crema");
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  alert("comprate el Bombon helado de marca Heladix");
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  alert("comprate el nonbon helado marca heladovich");
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  alert("comprate el palito de helado de crema");
}
