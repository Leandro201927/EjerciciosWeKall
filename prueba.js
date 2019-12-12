// returnstring
let palabra = prompt("Ingrese la palabra");

function  returnpalabra(texto) {  //palabra = Donovan
    var result =""; //Se crea una variable tipo string
    for (var i = texto.length - 1; i >= 0; i--) {
        
        result += texto[i]} //result=result+texto[i]
        return result;
     }
    
    // test cases
    console.log(returnpalabra(palabra));