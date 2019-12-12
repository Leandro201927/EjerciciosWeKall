var n, n1, c1;

c1=prompt("Ingrese la cadena");
n=c1.length-1;
var c2=new Array(n);

n1=0;
for(var i=n; i>=0; i--){
    c2[i]=c1[n1];
    n1++;
}
var c3=c2.toString();
c3=c3.replace(/,/g,'');
document.write(c3);