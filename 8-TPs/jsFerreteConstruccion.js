/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var n1, n2, resultado, suma;
    n1=document.getElementById("Largo").value;
    n2=document.getElementById("Ancho").value;
    n1=parseInt(n1);
    n2=parseInt(n2);
    suma=n1+n2+n1+n2;
    resultado=suma*3
    alert("se debe comprar" +resultado+  "para alambrar con tres hilos de alambre")

}
function Circulo () 
{
    var radio, resultado;
    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);
    resultado=(Math.PI*radio)*3
    alert("se debe comprar"+resultado);
	
}
function Materiales () 
{
    var largo, ancho, superficie, cemento, cal;
    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    superficie=largo*ancho;
    cemento=superficie*2;
    cal=superficie*3;
    alert("se debe comprar de cemento " +cemento+ " y de cal " +cal);




	
}