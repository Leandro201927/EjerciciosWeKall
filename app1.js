var c, ab, n, n2, tamano_cadena, nn, nn1, nn2, letras_repetidas;
c=prompt("Ingrese la cadena");
tamano_cadena=c.length-1;
ab=new Array(tamano_cadena);
letras_repetidas= Array(tamano_cadena); 
function cuantas_veces(cadena, letra){
    n2=0;
    for(var i=0; i<=tamano_cadena; i++){
        if(cadena[i]==letra){
            n2++;
        }
    }
    var cadenita=[letra, n2];
    return cadenita;
}

for(var num_letra=0; num_letra<=tamano_cadena; num_letra++){
    nn=cuantas_veces(c, c[num_letra]);
    
    var cantidad=nn[1];
    var cantidad_letra=0;
    
        for(var a=0; a<=num_letra; a++){
            ab[num_letra]=cuantas_veces(c, c[num_letra]);    
        }    
}

for(var num_letra=0; num_letra<=tamano_cadena; num_letra++){
    nn1=cuantas_veces(c, c[num_letra]);
    var letra=nn1[0];
    for(var num_letra1=num_letra+1; num_letra1<=tamano_cadena; num_letra1++){
        nn2=cuantas_veces(c, c[num_letra1]);
        var letra1=nn2[0];
        if(letra==letra1){
            ab.splice(num_letra1, 1); 
        }
        
    }
}
document.write(ab);

for(var num_posicion=0; num_posicion<=ab.length-1; num_posicion++){
    let letras=ab[num_posicion[0]];
    let numeros=ab[num_posicion[1]];
    document.getElementById("tabla").innerHTML+=agregar(letras, numeros);d
    
}

function agregar(letra, numero){
    var result='<tr>'+'<td>'+letra+'</td>'+'<td>'+numero+'</td>'+'</tr>'
    return result;
}
console.log(ab);