/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var n1, n2,resultado;
    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    n1=parseInt(n1);
    n2=parseInt(n2);
    resultado=n1+n2;
    alert("la suma es de "+ resultado);

	
}

function restar()
{
   var n1,n2, resultado;
   n1=document.getElementById("numeroUno").value;
   n2=document.getElementById("numeroDos").value;
   n1=parseInt(n1);
   n2=parseInt(n2);
   resultado=n1-n2;
   alert("la resta es de "+resultado);

	
}

function multiplicar()
{
    var n1,n2, resultado;  
    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    n1=parseInt(n1)
    n2=parseInt(n2)
    resultado=n1*n2;
    alert("la multiplicacion es de "+resultado);

	
}

function dividir()
{
    var n1, n2, resultado;
    n1=document.getElementById("numeroUno").value;
    n2=document.getElementById("numeroDos").value;
    n1=parseInt(n1);
    n2=parseInt(n2);
    resultado=n1/n2;
    alert("la division es de "+resultado);

	
}

