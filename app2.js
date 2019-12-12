var a, b, b1, a1, c1, c2, c1tamano, c2tamano, c1t, c2t, n, n1;

c1=prompt("Ingrese la primera cadena");
c2=prompt("Ingrese la segunda cadena");
a1=0;
c1t=c1.length-1;
c1tamano=c1t.toString();
c2t=c2.length-1;
c2tamano=c2t.toString();
n=c1.length-1;
n1=n.toString();
for(var i=0; i<=c1.length-1; i++){
    a=0;
    for(var j=0; j<=c2.length-1; j++){
        if(c1[i]!=c2[j]){
            b="false"+a;
            a++;
        }
    }
    if(b=="false"+c2tamano){
        b1="false";
    }else{
        b1="true"+a1;   
        a1++;
    }
}
if(b1=="true"+n1){
    b1="true";
}else{
    b1="false";
}
document.write(c1+" , "+c2+" = "+b1);