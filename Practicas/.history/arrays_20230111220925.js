let frutas = ["Manzana", "Banana", "Pera", "Uva"];
alert(frutas[0]);

let pc1={
    nombre:"DaltoPc",
    Procesador:"Intel core 17",
    ram:"16GB",
    espacio:"1TB"

};
let pc2=["DaltoPC","Intel core 17","16GB","1TB"]

document.write(pc1["nombre"])

let nombre= pc1["nombre"] ;
let procesador= pc1["procesador"] ;
let ram= pc1["ram"] ;
let espacio=pc1["espacio"];

frase = `El nombre de mi pc es :<b> ${nombre}</b> <br> 
         El procesador es :<b> ${procesador}</b> <br> 
         La memoria ram es :<b> ${ram}</b> <br> 
         El espacio es:<b> ${espacio}</b><br>`;
 document.write(frase)
         
         