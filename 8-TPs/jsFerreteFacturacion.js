/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var n1, n2, n3, resultado;
    n1=document.getElementById("PrecioUno").value;
    n2=document.getElementById("PrecioDos").value;
    n3=document.getElementById("PrecioTres").value;
    n1=parseInt(n1);
    n2=parseInt(n2);
    n3=parseInt(n3);
    resultado=n1+n2+n3
    alert("la suma es "+resultado);


	
}
function Promedio () 
{
    var n1, n2, n3, resultado,suma;
    n1=document.getElementById("PrecioUno").value;
    n2=document.getElementById("PrecioDos").value;
    n3=document.getElementById("PrecioTres").value;
    n1=parseInt(n1);
    n2=parseInt(n2);
    n3=parseInt(n3);
    suma=n1+n2+n3
    resultado=suma/3
    alert("el promedio es"+resultado);
	
}
function PrecioFinal () 
{
    var n1, n2, n3, resultado, suma;
    n1=document.getElementById("PrecioUno").value;
    n2=document.getElementById("PrecioDos").value;
    n3=document.getElementById("PrecioTres").value;
    n1=parseInt(n1);
    n2=parseInt(n2);
    n3=parseInt(n3);
    suma=n1+n2+n3
    resultado=25/100*suma+suma;
    alert("precio final +IVA "+resultado);
	
}