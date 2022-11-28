function creaFunc(){
    var nombre = "mozilla";
    function muestraNombre(){
        alert(nombre);
    }
    return muestraNombre;
}
var miFunc=creaFunc();
miFunc();
