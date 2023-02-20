let Nombre = "Alexis";
let Apellido = "Quiceno";
let usuario ="Alexis124";
let Edad= 21;
let password= "alexisquiseno123@gmail.com"
let isMayor= true;
let DineroAhorrado=400000;
let Deudas =200000;

var NameCompleto = Nombre + " " + Apellido;

console.log (NameCompleto);

const name2 = "Juan David";
const lastname = "Castro Gallego";
const completeName = name2 + lastname;
const nickname = "juandc";
function NombreCompleto(name2,lastname){
    return name2 + " " + lastname;
    
}
console.log("hello" + " " + NombreCompleto(name2,lastname) );

function saludo(name2,lastname,nickname){
    const completeName=NombreCompleto(name2,lastname);
}
console.log("Mi nombre es"+  completeName+"pero prefiero que me digas"+ nickname + "." );
